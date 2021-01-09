#include <windows.h>
#include <iostream>
#include <fstream>
#include <string>
using namespace std;
#define ll long long

#define tempCppName "Installer.cpp"
ofstream ostr(tempCppName, ios::binary | ios::out);
ll totalNum = 0;

string endWrite;

void writeInSth(const char toWrite[])
{
    ll l_toWrite = strlen(toWrite);
    for (ll i = 0; i < l_toWrite; i++)
    {
        ostr.put(toWrite[i]);
    }
}

int subFindAllFiles(char *fileName, char *InstalledTo)
{
    char pathName[256];
    sprintf(pathName, "%s\\%s", fileName, "*.*");
    WIN32_FIND_DATA fileData;
    HANDLE hFile = FindFirstFile(pathName, &fileData);
    // printf("Find file: %s\n", fileData.cFileName);
    bool ifNext = FindNextFile(hFile, &fileData);
    // bool ifNext=1;

    while (ifNext)
    {
        if (fileData.dwFileAttributes == FILE_ATTRIBUTE_DIRECTORY) // 找到的是文件夹
        {
            if (stricmp(fileData.cFileName, ".") && stricmp(fileData.cFileName, ".."))
            {
                char temp[256];
                char temp2[256];
                sprintf(temp, "%s\\%s", fileName, fileData.cFileName);
                sprintf(temp2, "%s\\\\%s", InstalledTo, fileData.cFileName);
                printf("Find directory: %s --> Write into cpp file: %s\n", temp, temp2);

                char toWrite[512];
                sprintf(toWrite, "    system(\"mkdir %s\");\n\n", temp2);
                endWrite += toWrite;

                subFindAllFiles(temp, temp2);
            }
        }
        else
        {
            char temp[256];
            char temp2[256];
            sprintf(temp, "%s\\%s", fileName, fileData.cFileName);
            sprintf(temp2, "%s\\\\%s", InstalledTo, fileData.cFileName);
            printf("Packing file: %s --> Write into cpp file: %s\n", temp, temp2);

            string toWrite = "const unsigned char file_";
            char thisOrder[6];
            sprintf(thisOrder, "%04d", ++totalNum);
            toWrite += thisOrder;
            toWrite += "[] = {";
            ifstream instr(temp, ios::binary | ios::in);
            if (!instr)
            {
                cout << "Open " << temp << " error!" << endl;
                system("pause");
                exit(-1);
            }
            char ch;
            bool sf = instr.get(ch);
            char num[20];
            ll thisTotalNum = sf;
            sprintf(num, "%d", (unsigned char)ch);
            toWrite += num;
            while (instr.get(ch))
            {
                sprintf(num, ", %d", (unsigned char)ch);
                toWrite += num;
                thisTotalNum++;
            }
            toWrite += "};\nstring file_name_";
            toWrite += thisOrder;
            toWrite += " = \"";
            toWrite += temp2;
            toWrite += "\";\nll file_size_";
            toWrite += thisOrder;
            toWrite += " = ";
            sprintf(num, "%lld", thisTotalNum);
            toWrite += num;
            toWrite += ";\n\n";
            endWrite += "    ofstream ostr_";
            endWrite += thisOrder;
            endWrite += "(file_name_";
            endWrite += thisOrder;
            endWrite += ".c_str(), ios::binary | ios::out);\n";
            endWrite += "    if (!ostr_";
            endWrite += thisOrder;
            endWrite += ")\n    {\n        cout << \"Open \" << file_name_";
            endWrite += thisOrder;
            endWrite += " << \" failuar\" << endl;\n        system(\"pause\");\n        exit(-1);\n    }\n";
            endWrite += "    for (ll i = 0; i < file_size_";
            endWrite += thisOrder;
            endWrite += "; i++)\n    {\n        ostr_";
            endWrite += thisOrder;
            endWrite += ".put(file_";
            endWrite += thisOrder;
            endWrite += "[i]);\n    }\n    ostr_";
            endWrite += thisOrder;
            endWrite += ".close();\n\n";

            writeInSth(toWrite.c_str());

            subFindAllFiles(temp, temp2);
        }

        ifNext = FindNextFile(hFile, &fileData);
    }
}

void getInstalledToDir(char InstalledToDir[], char InstalledFromDir[])
{
    int l_InstalledFromDir = strlen(InstalledFromDir);
    for (int i = 0; i < l_InstalledFromDir; i++)
    {
        if (InstalledFromDir[i] == '/')
            InstalledFromDir[i] = '\\';
    }
    int loc = l_InstalledFromDir - 1;
    while (InstalledFromDir[loc] != '\\' && loc)
        loc--;
    for (int i = 0; loc <= l_InstalledFromDir; loc++, i++)
    {
        InstalledToDir[i] = InstalledFromDir[loc];
        if (InstalledToDir[i] == '\\')
            i--;
    }
}

int writeFileHead(const char InstalledToDir[])
{
    if (!ostr)
    {
        cout << "Open file failer!" << endl;
        system("pause");
        exit(-1);
    }
    char head[1024] = {"#include <iostream>\n\
#include <fstream>\n\
#include <string>\n\
using namespace std;\n\
#define ll long long\n\
\n\
"};
    int l_head = strlen(head);
    for (int i = 0; i < l_head; i++)
    {
        ostr.put(head[i]);
    }
    strcpy(head, "int main()\n\
{\n\
    printf(\"Then it will install some files in this directory.\\n\");\n\
    printf(\"After all things installed, the Installer will disappear.\\n\");\n\
    system(\"pause\");\n\
\n    system(\"mkdir ");
    strcat(head, InstalledToDir);
    strcat(head, "\");\n\n");
    endWrite += head;
}

int writeFileEnd(string &writeWhat)
{
    endWrite += "    printf(\"Already Installed!\\n\");\n";
    endWrite += writeWhat;
    ll l_end = endWrite.size();
    for (ll i = 0; i < l_end; i++)
    {
        ostr.put(endWrite[i]);
    }
    ostr.close();
}

void showHelp()
{
    char order[256];
    ostr.close();
    sprintf(order, "del %s", tempCppName);
    system(order);
    cout << "InstallerMaker --help: Show help" << endl;
    cout << "InstallerMaker -t: Pack this dir" << endl;
    cout << "InstallerMaker path[Opthin -k]: Pack the path[keep sorce file]" << endl;
    cout << "InstallerMaker path [add]: write add into 'run.bat' and run it" << endl;
    cout << "InstallerMaker path -c: copy run.bat to the dir same with Installer.exe and run it" << endl;
    cout << "There is a big bug in the -t order. Don't use it easily." << endl;
}

int main(int argc, char *argv[])
{
    char InstalledToDir[256] = {};
    // char InstalledFromDir[256] = {"F:\\0\\HeroWars\\test"};
    char InstalledFromDir[256] = {};
    bool ifKeep = 0;
    string writeWhat = "    system(\"pause\");\n    return 0;\n}";

    if (argc != 2 && argc != 3)
    {
        showHelp();
        if (argc == 1)
            system("pause");
        exit(-2);
    }
    else if (argc == 2)
    {
        if (stricmp(argv[1], "--help") == 0)
        {
            showHelp();
            exit(-2);
        }
        else if (stricmp(argv[1], "-t") == 0)
        {
            GetCurrentDirectory(256, InstalledFromDir);
        }
        else
        {
            strcpy(InstalledFromDir, argv[1]);
        }
    }
    else if (argc == 3)
    {
        if (stricmp(argv[2], "-k") == 0)
        {
            strcpy(InstalledFromDir, argv[1]);
            ifKeep = 1;
        }
        else if (stricmp(argv[1], "-k") == 0)
        {
            strcpy(InstalledFromDir, argv[2]);
            ifKeep = 1;
        }
        else if (stricmp(argv[2], "-c") == 0)
        {
            strcpy(InstalledFromDir, argv[1]);
            // FILE *fp = fopen("run.bat", "r");
            // if (fp == NULL)
            // {
            //     printf("can't find run.bat!\n");
            //     system("pasue");
            //     return -3;
            // }
            // char text[2048];
            // fscanf(fp, text);
            // cout << "text in the run.bat: " << text << endl;
            writeWhat = "    ofstream ostr_run(\"run.bat\",ios::binary|ios::out);\n\
    const unsigned char file_run[] = {";
            ifstream instr_run("run.bat",ios::binary|ios::in);
            if(!instr_run)
            {
                printf("can't find run.bat!\n");
                system("pasue");
                return -3;
            }
            char ch;
            char temp[20];
            bool sf=instr_run.get(ch);
            sprintf(temp, "%d", (unsigned char)ch);
            writeWhat += temp;
            int thisTotalNum=sf;
            while (instr_run.get(ch))
            {
                sprintf(temp, ", %d", (unsigned char)ch);
                writeWhat += temp;
                thisTotalNum++;
            }
            sprintf(temp,"%d",thisTotalNum);
            writeWhat += "};\n    for(int i=0;i<";
            writeWhat += temp;
            writeWhat += ";i++)\n    {\n        ostr_run.put(file_run[i]);\n    }\n    ostr_run.close();\n";
            writeWhat += "    return system(\"start run.bat\"),0;\n}";
        }
        else
        {
            strcpy(InstalledFromDir, argv[1]);
            writeWhat = "    FILE *fp = fopen(\"run.bat\",\"w\");\n\
    fprintf(fp, \"";
            writeWhat += argv[2];
            writeWhat += "\");\n    fclose(fp);\n    return system(\"start run.bat\"),0;\n}";
        }
    }

    getInstalledToDir(InstalledToDir, InstalledFromDir);
    writeFileHead(InstalledToDir);
    subFindAllFiles(InstalledFromDir, InstalledToDir);

    cout << "Wrinting..." << endl;
    writeFileEnd(writeWhat);
    cout << "Compiling..." << endl;

    char order[256];
    sprintf(order, "g++ %s -o Installer.exe", tempCppName);
    system(order);
    cout << "Maken!" << endl;
    if (ifKeep)
    {
        char front[256];
        int loc = strlen(tempCppName) - 1;
        while (tempCppName[loc] != '.' && loc)
            loc--;
        for (int i = 0; i < loc; i++)
        {
            front[i] = tempCppName[i];
        }
        sprintf(order, "rename %s %s.TFi", tempCppName, front);
        system(order);
    }
    else
    {
        sprintf(order, "del %s", tempCppName);
        system(order);
    }
    system("pause");
    return 0;
}