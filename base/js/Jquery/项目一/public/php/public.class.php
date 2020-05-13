<?php
/**
 *
 * @authors 微轩痕 (2980325541@qq.com)
 * @date    2018-10-21 18:57:38
 * @version BUG 1.0.0
 */
class MySQl_info {
    private $_mysqli,$_res;//私有字段
    //构造函数-链接数据库
    function  __construct($host,$name,$password,$base='',$port=3306,$type='uft-8'){
       if(empty($host) || empty($name) || empty($password)|| empty($base)){
            return '参数为空';
       }
       @$this->_mysqli = new mysqli ($host,$name,$password,$base,$port);
       if(mysqli_connect_errno()==1049){
            echo '<script type="text/javascript" charset="uft-8">alert("'.$base.'不存在")</script>';
            exit();
        }
       if(mysqli_connect_errno()){
          return '数据库链接错误'.mysqli_connect_error();
       }else{
            $this->_mysqli ->set_charset($type);
       }
    }
    //建立数据表
    public function createSQL($tablename){
        $time = time();
        $sql_zbtb = <<<sql
                CREATE TABLE $tablename (
                id int(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT 'id号' ,
                user varchar(20) NOT NULL UNIQUE KEY COMMENT '姓名',
                pass char(40) NOT NULL COMMENT '密码',
                ques varchar(200) NOT NULL COMMENT '提问',
                ans varchar(200) NOT NULL COMMENT '回答',
                email char(30) NOT NULL COMMENT '电子邮件',
                birthday date NOT NULL COMMENT '出生年月',
                ps varchar(200) NOT NULL COMMENT '备注',
                time char(15) NOT NULL DEFAULT $time COMMENT '最后修改时间'
        )AUTO_INCREMENT=100001 DEFAULT CHARSET=utf8;
sql;
        $ret_zbtb = $this->_mysqli  -> query($sql_zbtb);
        if($this ->_mysqli -> error){
              if($this->_mysqli -> error =="Table '".$tablename."' already exists"){
                return $tablename.'已存在！';
              }else{
                return $tablename.'数据表创建失败'.$sql_zbtb."数据库".$this->_mysqli -> error;
              }

        }
        return $tablename.'数据表创建成功';;
    }
    /*
     * name(节目名) hdurl(超清) mdurl(高清) udurl(标清) tdurl(流畅) time(最后修改时间)
     */
    //根据表和named写入数据或者修改数据,必须数组传递一个键（type => writ / set / del）如果 set id 值也要
    public  function wSQL($tablename,$arr=[]){
        $keys =[];
        $values=[];
        if(!isset($arr['type']) || empty($arr['type'] || $arr['type'] !='writ' || $arr['type'] !='set' )){
            return '<script type="text/javascript" charset="uft-8">alert("参数关键type属性(writ/set)有误")</script>';
        }
        if($arr['type']=='set' && empty($arr['id'] || $arr['type']=='del')){
            return '<script type="text/javascript" charset="uft-8">alert("参数关键id属性有误")</script>';
        }
        if(isset($arr['id'])){
            $id=$arr['id'];
        }else{
            $id=' ';
        }
        $type=$arr['type'];
        //重写拼接
        if($arr['type']!=='del'){
        foreach ($arr as $key => $value){
            if($key!='type' && $key!='id'){
                $keys[]= $key;
                $values[]=$value;
            }
        }
        $writ_key  =implode(',',$keys);
        $writ_value ="'".implode("','",$values);
        if(!in_array('time',$keys)){
          $writ_key .=',time';
          $writ_value .= "','".time()."'";
        }else{
          $writ_value .= "'";
        }
       
        $keys = null;
        foreach ($arr as $key => $value){
            if($key!='type' && $key!='id'){
                $keys[]=$key."='".$value."'";
            }
        }
        $set_key = implode(',',$keys);
        $sqlwrit = <<<sql
            INSERT INTO $tablename ($writ_key)
            VALUES ($writ_value);
sql;
        $sqlset = <<<sql
            UPDATE $tablename SET $set_key WHERE id=$id;
sql;
        }

        $sqldel = <<<sql
            DELETE FROM $tablename WHERE id=$id;
sql;

        if($type=='writ'){
            $sql = $sqlwrit;//没有时写入数据,如果先查询就慢了点
            //echo $sqlwrit;
        }else if($type=='set'){
            $sql = $sqlset;
            echo $sqlset;
        }else if($type=='del'){
                $sql = $sqldel;
            echo $sqldel;
        }else {
            return '<script type="javascript">alert("缺少关键type属性(writ/set)")</script>';
        }
        $this->_mysqli -> query($sql);
        if($this ->_mysqli -> error){
            return $tablename.'修改数据失败'.$this->_mysqli -> error;
          }else{
            return '修改数据成功';
        }
    }
    //根据表和name查询数据相关（字段）数据 , $name=* 表示输出整个数据库数据据   $data=['0'] !='*' 表示输出所有值
    public  function zbData($tablename,$name,$data=[]){
        $keys =[];
        $inf =[];
        if(empty($name) && empty($data)  ){
            return false;
        }
        if($data[0]=='*' && $name !='*'){
            $key='*';
        }else{
            foreach ($data as $key => $value){
                $keys[]=$value;
            }
            $key =implode(',',$keys);
        }

        $con_sql = <<<sql
            SELECT $key FROM $tablename WHERE name='$name';
sql;
        $all_sql = <<<sql
            SELECT $key FROM $tablename ORDER BY id ASC;
sql;
        //ASC正序  DESC 反序
        if($name =='*'){
            $this->_res = $this->_mysqli -> query($all_sql);
            if ($this->_res -> num_rows > 0) {
               $inf = $this->_res -> fetch_all(MYSQLI_ASSOC);
            }
        }else{
              //echo $con_sql;
            $this->_res = $this->_mysqli -> query($con_sql);
            //echo $_res;
            $inf = $this->_res->fetch_assoc();
        }
        //
       //返回关联数组(全部数组是二维数组)
        return $inf;
    }
    //释放当前类所占用的内存并关闭当前数据连接   当PHP决定你的脚本不再与对象相关时，析构函数将被调用
    public function __destruct() {
              @$this->_res ->free();
                @$this->_mysqli->close();
                //echo '<br/>关闭数据库成功';
    }
};
class Tool{
    //手机端判断 true / false
    public static function isMobile(){
        $matches=array();
        $useragent=isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : '';
        $useragent_commentsblock=preg_match('|\(.*?\)|',$useragent,$matches)>0?$matches[0]:'';
        function CheckSubstrs($substrs,$text){
            foreach($substrs as $substr){
                if(false!==strpos($text,$substr)){
                    return true;
                }else{
                    return false;
                }
            }
        }
        $mobile_os_list=array('Google Wireless Transcoder','Windows CE','WindowsCE','Symbian','Android','armv6l','armv5','Mobile','CentOS','mowser','AvantGo','Opera Mobi','J2ME/MIDP','Smartphone','Go.Web','Palm','iPAQ');
        $mobile_token_list=array('Profile/MIDP','Configuration/CLDC-','160×160','176×220','240×240','240×320','320×240','UP.Browser','UP.Link','SymbianOS','PalmOS','PocketPC','SonyEricsson','Nokia','BlackBerry','Vodafone','BenQ','Novarra-Vision','Iris','NetFront','HTC_','Xda_','SAMSUNG-SGH','Wapaka','DoCoMo','iPhone','iPod');
        $found_mobile=CheckSubstrs($mobile_os_list,$useragent_commentsblock) || CheckSubstrs($mobile_token_list,$useragent);
        if ($found_mobile){
            return true;
        }else{
            return false;
        }
    }
    /**转换编码
     *
     * $str 原始中文字符串
     * $encoding 原始字符串的编码，默认utf-8
     * $prefix 编码后的前缀，默认"&#"
     * $postfix 编码后的后缀，默认";"
     */
    public static function unicode_encode($str, $encoding = 'utf-8', $prefix = '&#', $postfix = ';') {
        //将字符串拆分
        $str = iconv("UTF-8", "gb2312", $str);
        $cind = 0;
        $arr_cont = array();
        $unicodestr = '';
        for ($i = 0; $i < strlen($str); $i++) {
            if (strlen(substr($str, $cind, 1)) > 0) {
                if (ord(substr($str, $cind, 1)) < 0xA1) { //如果为英文则取1个字节
                    array_push($arr_cont, substr($str, $cind, 1));
                    $cind++;
                } else {
                    array_push($arr_cont, substr($str, $cind, 2));
                    $cind+=2;
                }
            }
        }
        foreach ($arr_cont as &$row) {
            $row = iconv("gb2312", "UTF-8", $row);
        }

        //转换Unicode码
        foreach ($arr_cont as $key => $value) {
            $key.=$key;
            $unicodestr .= $prefix . base_convert(bin2hex(iconv('utf-8', 'UCS-4', $value)), 16, 10) .$postfix;
        }
        $key =null;
        return $unicodestr;
    }
    public static function unicode_decode($unistr, $encoding = 'utf-8', $prefix = '&#', $postfix = ';') {
        $arruni = explode($prefix, $unistr);
        $unistr = '';
        for ($i = 1, $len = count($arruni); $i < $len; $i++) {
            if (strlen($postfix) > 0) {
                $arruni[$i] = substr($arruni[$i], 0, strlen($arruni[$i]) - strlen($postfix));
            }
            $temp = intval($arruni[$i]);
            $unistr .= ($temp < 256) ? chr(0) . chr($temp) : chr($temp / 256) . chr($temp % 256);
        }
        return iconv('UCS-2', $encoding, $unistr);
    }
    //返回JSON数据数组
    public static function return_json($result = array()){
        $arry = array();
        $time = time();
        $arry["code"] = 1;
        if(empty($result)) {
            $arry["data"] = 'null';
        }else{
          $result['data'] = addslashes($result['data']);//符号转义下
          if(!empty($result['time'])) $time = $result['time'];
          date_default_timezone_set('PRC');
          $result['time'] = date("Y-m-d H:i:s",$time);
          $arry['data'] = $result;
        }
        return json_encode($arry);
        
    }
};

?>