
$(function(){
    // execl 导出
    $('#downloadExcel').click(function(){
        downloadExcel('tableToExce', '下载模板');
    })
})

//替换table数据和worksheet名字
var format = function (s, c) {
    return s.replace(/{(\w+)}/g,
        function (m, p) {
            return c[p];
        });
}
//base64转码
var base64 = function (s) {
    return window.btoa(unescape(encodeURIComponent(s)));
};
function downloadExcel(tableid, sheetName) {
    var uri = 'data:application/vnd.ms-excel;base64,';
    var template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel"' +
            'xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>'
            + '<x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets>'
            + '</x:ExcelWorkbook></xml><![endif]-->' +
            '</head><body><table>{table}</table></body></html>';
    if (!tableid.nodeType) tableid = document.getElementById(tableid);
    var ctx = {worksheet: sheetName || 'Worksheet', table: tableid.innerHTML};
    window.location.href = uri + base64(format(template, ctx));
}
