const Employee =require("./Employee")
class Enginner extends Employee{
constructor(name,id,email,github)
{
    super(name,id,email);
    this.github =github;
  
}
getGithub(){
    this.github=githib;

}
getRole(){
    return Engineer;
}
}
module.exports=Enginner;
