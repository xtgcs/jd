/**
 * Created by tianpan on 2015/9/14.
 */
/*���ݴ�������idֵ�����Ҹ�Ԫ�أ������displayֵ��Ϊ�������ĵڶ�������dp*/
function showAndHide(id,dp){
    document.getElementById(id).style.display=dp;

}
function showMyJd(){
    document.getElementById("my_jd").style.backgroundColor="#fff";
    document.getElementById("my_jd").style.backgroundPosition="-118px -55px";
    document.getElementById("my_jd").style.borderBottomColor="#fff";
    document.getElementById("my_jd_dropdown").style.display="block";

}
function hideMyJd(){
    document.getElementById("my_jd").style.backgroundColor="#f7f7f7";
    document.getElementById("my_jd").style.backgroundPosition="-118px -25px";
    document.getElementById("my_jd").style.borderBottomColor="#efef";
    document.getElementById("my_jd_dropdown").style.display="none";
}