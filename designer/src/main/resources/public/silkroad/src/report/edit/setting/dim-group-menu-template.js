define(['template'], function (template) {
    function anonymous($data,$filename) {
        'use strict';
        $data=$data||{};
        var $utils=template.utils,$helpers=$utils.$helpers,$out='';$out+='<ul class="br-3 j-root">\n    <li class="br-3 data-sources-float-window-item j-rename"><span>重命名</span></li>\n    <li class="br-3 data-sources-float-window-item j-delete"><span>删除</span></li>\n</ul>';
        return $out;
    }
    return { render: anonymous };
});