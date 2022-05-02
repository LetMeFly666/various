/*
 * @Author: LetMeFly
 * @Date: 2022-05-01 20:28:50
 * @LastEditors: LetMeFly
 * @LastEditTime: 2022-05-02 14:24:56
 */
function add1script(scriptURL, ifDifferentEachTime=true, onerror=null) {
    const script=document.createElement('script');//创建script标签节点
    script.setAttribute('type','text/javascript');//设置script类型
    script.setAttribute('src', scriptURL + (ifDifferentEachTime ? ('?v=' + Math.random()) : ("")));
    if (onerror) {
        script.onerror = onerror;
    }
    document.head.appendChild(script);
}

function setTitleInputOutput(LetMeFlyOJ_title, LetMeFlyOJ_inputData, LetMeFlyOJ_outputData) {
    document.title = LetMeFlyOJ_title;
    document.querySelector("#problemName").innerHTML = LetMeFlyOJ_title;

    document.querySelector("#copyin").setAttribute("data-clipboard-text", LetMeFlyOJ_inputData);
    document.querySelector("#copyinCode").innerHTML = LetMeFlyOJ_inputData;

    document.querySelector("#copyout").setAttribute("data-clipboard-text", LetMeFlyOJ_outputData);
    document.querySelector("#copyoutCode").innerHTML = LetMeFlyOJ_outputData;
}

function renderProblem() {
    function errorRender() {
        alert("错误的题目id!");
        add1script('https://letmefly.xyz/ACM/ForBUCToj/Problems/Problem/errorProblem.js')
    }
    const href = location.href;
    try {
        const _id = href.split("?id=");
        if (_id.length == 1) {
            errorRender();
            return;
        }
        const id = _id[1];
        add1script('https://letmefly.xyz/ACM/LetMeFlyOJ/problems/' + id + '.js', errorRender);
        add1script('https://letmefly.xyz/ACM/ForBUCToj/Problems/Problem/' + id + '.js', false, errorRender);
    }
    catch (err) {
        errorRender();
        return;
    }
}

$(document).ready(function () {
    renderProblem();
});

var lastSubmitted = '';
// var editor = ace.edit("editor");
// editor.setTheme("ace/theme/tomorrow");
// editor.getSession().setMode("ace/mode/" + $('#languages-menu .item.active').data('mode'));
// editor.getSession().setUseSoftTabs(false);
// editor.container.style.lineHeight = 1.6;
// editor.container.style.fontSize = '14px';
// editor.container.style.fontFamily = "'Roboto Mono', 'Bitstream Vera Sans Mono', 'Menlo', 'Consolas', 'Lucida Console', monospace";
// editor.setShowPrintMargin(false);
// editor.renderer.updateFontSize();
function transform() {
    let height = document.body.clientHeight;
    let width = parseInt(document.body.clientWidth * 0.618);
    let width2 = parseInt(document.body.clientWidth * 0.382);
    let submitURL = $("#submit")[0].href;
    console.log(width);
    let main = $("#main");
    let problem = main.html();
    main.removeClass("container");
    main.css("width", width2);
    main.css("margin-left", "10px");
    main.parent().append("<div id='submitPage' class='container' style='opacity:0.8;position:fixed;z-index:1000;top:49px;right:-" + width2 + "px'></div>");
    //main.css("float","left");
    $("#submitPage").html("<iframe src='" + submitURL + "&spa' width='" + width + "px' height='" + height + "px' ></iframe>");
}

function submit_code() {
    if (!$('#submit_code input[name=answer]').val().trim() && !editor.getValue().trim()) return false;
    $('#submit_code input[name=language]').val($('#languages-menu .item.active').data('value'));
    lastSubmitted = editor.getValue();
    $('#submit_code input[name=code]').val(editor.getValue());
    return true;
}

// $('#languages-menu')[0].scrollTop = $('#languages-menu .active')[0].offsetTop - $('#languages-menu')[0].firstElementChild.offsetTop;

$(function () {
    $('#languages-menu .item').click(function () {
        $(this)
            .addClass('active')
            .closest('.ui.menu')
            .find('.item')
            .not($(this))
            .removeClass('active')
            ;
        editor.getSession().setMode("ace/mode/" + $(this).data('mode'));
    });
});

$(document).ready(function () {
    var msg = "<marquee style='margin-top:10px' id=broadcast direction='left' scrollamount=3 scrolldelay=50 onMouseOver='this.stop()'" +
        " onMouseOut='this.start()' class=toprow>" + false + "</marquee>";
    $(".jumbotron").prepend(msg);
    $("form").append("<div id='csrf' />");
    $("#csrf").load("csrf.php");

});

$(".hint pre").each(function () {
    var plus = "<span class='glyphicon glyphicon-plus'>Click</span>";
    var content = $(this);
    $(this).before(plus);
    $(this).prev().click(function () {
        content.toggle();
    });

});

function phpfm(pid) {
    //alert(pid);
    $.post("admin/phpfm.php", { 'frame': 3, 'pid': pid, 'pass': '' }, function (data, status) {
        if (status == "success") {
            document.location.href = "admin/phpfm.php?frame=3&pid=" + pid;
        }
    });
}

// 为了加载公式的使用而加入
MathJax = {
    tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] }
};

// LetMeFly packup
function setCopyAble(copyin, copyout) {
    var clipboardin = new Clipboard(copyin);
    clipboardin.on('success', function (e) {
        $("#copyin").text("复制成功!");
        setTimeout(function () { $("#copyin").text("复制"); }, 1500);
        console.log(e);
    });
    clipboardin.on('error', function (e) {
        $("#copyin").text("复制失败!");
        setTimeout(function () { $("#copyin").text("复制"); }, 1500);
        console.log(e);
    });

    var clipboardout = new Clipboard(copyout);
    clipboardout.on('success', function (e) {
        $("#copyout").text("复制成功!");
        setTimeout(function () { $("#copyout").text("复制"); }, 1500);
        console.log(e);
    });
    clipboardout.on('error', function (e) {
        $("#copyout").text("复制失败!");
        setTimeout(function () { $("#copyout").text("复制"); }, 1500);
        console.log(e);
    });
}