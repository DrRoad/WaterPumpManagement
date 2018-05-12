


function menuClick() {
    var o = $(this).attr("href"),
        m = $(this).data("index"),
        l = $.trim($(this).text()),
        k = true;
    if (o == undefined || $.trim(o).length === 0) {
        return false;
    }
    $(".J_menuTab").each(function () {
        if ($(this).data("id") === o) {
            if (!$(this).hasClass("active")) {
                $(this).addClass("active").siblings(".J_menuTab").removeClass("active");
                activeTab(this);
                $(".J_mainContent .J_iframe").each(function () {
                    if ($(this).data("id") === o) {
                        $(this).show().siblings(".J_iframe").hide();
                        return false;
                    }
                    return true;
                });
            }
            k = false;
            return false;
        }
        return true;
    });
    if (k) {
        var p = '<a href="javascript:;" class="active J_menuTab" data-id="' + o + '">' + l + ' <i class="fa fa-times-circle"></i></a>';
        $(".J_menuTab").removeClass("active");
        var n = '<iframe class="J_iframe" name="iframe' + m + '" width="100%" height="100%" src="' + o + '" frameborder="0" data-id="' + o + '" seamless></iframe>';
        $(".J_mainContent").find("iframe.J_iframe").hide().parents(".J_mainContent").append(n);
        $(".J_menuTabs .page-tabs-content").append(p);
        activeTab($(".J_menuTab.active"));
    }
    return false;
}

function jump() {
    parent.window.menuClick();
}