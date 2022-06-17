document.getElementById("bbBtn").addEventListener("click" , function()
{
    document.getElementById("bb").classList.add("bigboxRemove");
    document.getElementById("bbInput").style.display="none";
    document.getElementById("bbBtn").style.display="none";
    for(var i=0;i<=3;i++)
    {
        document.getElementsByClassName("box")[i].classList.add("box"+(i+1)+"Animation");
    }
    
    document.getElementsByClassName("middleHeading")[0].classList.add("middleHeadingNextLevel")
    document.getElementById("mh").classList.add="midAnimate";
    for(var i=0;i<=3;i++)
    document.getElementsByClassName("box")[i].style.opacity="1";
    document.getElementsByClassName("container1-overlay")[0].style.backgroundColor="white";
    startImaging()
})
document.getElementById("bb").addEventListener("mouseover" , function()
{
    document.getElementById("bbBtn").classList.add("btnAnimation")
    document.getElementById("bbInput").classList.add("bigboxInputshow")
    document.getElementById("bbInput").classList.remove("bigboxInput")
})
document.getElementById("bbInput").addEventListener("click",function()
{
    document.getElementById("bbInput").style.boxShadow=" 0px 0px 20px 5px wheat";
    
})
var flag = true;
document.getElementById("checkThought").addEventListener("click",function()
{
    
    document.getElementById("checkThought").classList.add("hitBox")
    setTimeout(function()
    {
       for(var i=0;i<256;i++)
       {
        document.getElementsByClassName("level8")[i].classList.add("level8animation"); 
        
       }
    },0)
    setTimeout(function()
    {
        document.getElementsByClassName("thoughtPresent")[0].classList.add("welcomeThoughtPresent")
        document.getElementsByClassName("thoughtPresent")[0].classList.remove("thoughtPresent")
    },1000)
    if(flag)
    {
        thoughtProcess();
        flag=false;
    }
    
})
function thoughtProcess()
{
    var randomNumber = Math.random();
    randomNumber*=10;
    randomNumber = Math.floor(randomNumber);
    var thoughtArray = ["“For every minute you are angry you lose sixty seconds of happiness.” —Ralph Waldo Emerson","“In three words I can sum up everything I’ve learned about life: it goes on.” —Robert Frost"," “Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.” —Kahlil Gibran","“If you change the way you look at things, the things you look at change.” —Wayne Dyer","“Think of all the beauty still left around you and be happy.”—Anne Frank","“You have the power to accomplish everything you set out to do today.”","“Each day, I move closer to the life I dream of.”","“Keep your face to the sunshine and you cannot see a shadow.” —Helen Keller","“Attitude is a little thing that makes a big difference.” —Winston Churchill","“The only time you fail is when you fall down and stay down.” —Stephen Richards"];
    var thoughtAnswer = thoughtArray[randomNumber];
    document.getElementById("thoughtOfTheDayAnswer").innerHTML=thoughtAnswer;
}

document.getElementById("checkContact").addEventListener("click",function()
{
    
    
    document.getElementById("infoContact").style.opacity="0.8";
    setTimeout(function()
    {
        document.getElementById("box2Heading").classList.add("box2H1Animation")
    },1000)
    setTimeout(function()
    {
        document.getElementById("wrapperBox2").classList.add("box2WrapperAnimation")
    },1000)
    
    setTimeout(function(){
        document.getElementById("box2").classList.remove("moveBackContactBox")
        document.getElementById("infoContact").style.opacity="0";
        document.getElementById("box2Heading").classList.remove("box2H1Animation")
        document.getElementById("wrapperBox2").classList.remove("box2WrapperAnimation")
    },20000)
})

function startImaging()
{
    
    setTimeout(function()
    {
        setTimeout(function()
        {
            document.getElementById("b4Thought").innerHTML="Be yourself; everyone else is already taken― Oscar Wilde"
        },1500)
        document.getElementById("b4Wrapper").classList.add("classImages1")
        document.getElementById("b4Wrapper").classList.remove("classImages2")
        document.getElementById("b4Wrapper").classList.remove("classImages3")
        document.getElementById("b4Wrapper").classList.remove("classImages4")
        document.getElementById("b4Wrapper").classList.remove("classImages5")
        document.getElementById("b4Wrapper").classList.remove("classImages6")
        document.getElementById("b4Wrapper").classList.remove("classImages7")
        document.getElementById("b4Wrapper").classList.remove("classImages8")
        document.getElementById("b4Wrapper").classList.remove("classImages9")
        document.getElementById("b4Wrapper").classList.remove("classImages10")
    },0)
    setTimeout(function()
    {
        document.getElementById("b4Thought").innerHTML="We accept the love we think we deserve"
        document.getElementById("b4Wrapper").classList.remove("classImages1")
        document.getElementById("b4Wrapper").classList.add("classImages2")
        document.getElementById("b4Wrapper").classList.remove("classImages3")
        document.getElementById("b4Wrapper").classList.remove("classImages4")
        document.getElementById("b4Wrapper").classList.remove("classImages5")
        document.getElementById("b4Wrapper").classList.remove("classImages6")
        document.getElementById("b4Wrapper").classList.remove("classImages7")
        document.getElementById("b4Wrapper").classList.remove("classImages8")
        document.getElementById("b4Wrapper").classList.remove("classImages9")
        document.getElementById("b4Wrapper").classList.remove("classImages10")
    },10000)
    setTimeout(function()
    {
        document.getElementById("b4Thought").innerHTML="It is better to be hated for what you are than to be loved for what you are not"
        document.getElementById("b4Wrapper").classList.remove("classImages1")
        document.getElementById("b4Wrapper").classList.remove("classImages2")
        document.getElementById("b4Wrapper").classList.add("classImages3")
        document.getElementById("b4Wrapper").classList.remove("classImages4")
        document.getElementById("b4Wrapper").classList.remove("classImages5")
        document.getElementById("b4Wrapper").classList.remove("classImages6")
        document.getElementById("b4Wrapper").classList.remove("classImages7")
        document.getElementById("b4Wrapper").classList.remove("classImages8")
        document.getElementById("b4Wrapper").classList.remove("classImages9")
        document.getElementById("b4Wrapper").classList.remove("classImages10")
    },20000)
    setTimeout(function()
    {
        document.getElementById("b4Thought").innerHTML="I am so clever that sometimes I don't understand a single word of what I am saying."
        document.getElementById("b4Wrapper").classList.remove("classImages1")
        document.getElementById("b4Wrapper").classList.remove("classImages2")
        document.getElementById("b4Wrapper").classList.remove("classImages3")
        document.getElementById("b4Wrapper").classList.add("classImages4")
        document.getElementById("b4Wrapper").classList.remove("classImages5")
        document.getElementById("b4Wrapper").classList.remove("classImages6")
        document.getElementById("b4Wrapper").classList.remove("classImages7")
        document.getElementById("b4Wrapper").classList.remove("classImages8")
        document.getElementById("b4Wrapper").classList.remove("classImages9")
        document.getElementById("b4Wrapper").classList.remove("classImages10")
    },30000)
    setTimeout(function()
    {
        document.getElementById("b4Thought").innerHTML="Live as if you were to die tomorrow. Learn as if you were to live forever."
        document.getElementById("b4Wrapper").classList.remove("classImages1")
        document.getElementById("b4Wrapper").classList.remove("classImages2")
        document.getElementById("b4Wrapper").classList.remove("classImages3")
        document.getElementById("b4Wrapper").classList.remove("classImages4")
        document.getElementById("b4Wrapper").classList.add("classImages5")
        document.getElementById("b4Wrapper").classList.remove("classImages6")
        document.getElementById("b4Wrapper").classList.remove("classImages7")
        document.getElementById("b4Wrapper").classList.remove("classImages8")
        document.getElementById("b4Wrapper").classList.remove("classImages9")
        document.getElementById("b4Wrapper").classList.remove("classImages10")
    },40000)
    setTimeout(function()
    {
        document.getElementById("b4Thought").innerHTML="A friend is someone who knows all about you and still loves you."
        document.getElementById("b4Wrapper").classList.remove("classImages1")
        document.getElementById("b4Wrapper").classList.remove("classImages2")
        document.getElementById("b4Wrapper").classList.remove("classImages3")
        document.getElementById("b4Wrapper").classList.remove("classImages4")
        document.getElementById("b4Wrapper").classList.remove("classImages5")
        document.getElementById("b4Wrapper").classList.add("classImages6")
        document.getElementById("b4Wrapper").classList.remove("classImages7")
        document.getElementById("b4Wrapper").classList.remove("classImages8")
        document.getElementById("b4Wrapper").classList.remove("classImages9")
        document.getElementById("b4Wrapper").classList.remove("classImages10")
    },50000)
    setTimeout(function()
    {
        document.getElementById("b4Thought").innerHTML="Be the change that you wish to see in the world"
        document.getElementById("b4Wrapper").classList.remove("classImages1")
        document.getElementById("b4Wrapper").classList.remove("classImages2")
        document.getElementById("b4Wrapper").classList.remove("classImages3")
        document.getElementById("b4Wrapper").classList.remove("classImages4")
        document.getElementById("b4Wrapper").classList.remove("classImages5")
        document.getElementById("b4Wrapper").classList.remove("classImages6")
        document.getElementById("b4Wrapper").classList.add("classImages7")
        document.getElementById("b4Wrapper").classList.remove("classImages8")
        document.getElementById("b4Wrapper").classList.remove("classImages9")
        document.getElementById("b4Wrapper").classList.remove("classImages10")
    },60000)
    setTimeout(function()
    {
        document.getElementById("b4Thought").innerHTML="You only live once, but if you do it right, once is enough"
        document.getElementById("b4Wrapper").classList.remove("classImages1")
        document.getElementById("b4Wrapper").classList.remove("classImages2")
        document.getElementById("b4Wrapper").classList.remove("classImages3")
        document.getElementById("b4Wrapper").classList.remove("classImages4")
        document.getElementById("b4Wrapper").classList.remove("classImages5")
        document.getElementById("b4Wrapper").classList.remove("classImages6")
        document.getElementById("b4Wrapper").classList.remove("classImages7")
        document.getElementById("b4Wrapper").classList.add("classImages8")
        document.getElementById("b4Wrapper").classList.remove("classImages9")
        document.getElementById("b4Wrapper").classList.remove("classImages10")
    },70000)
    setTimeout(function()
    {
        document.getElementById("b4Thought").innerHTML="A room without books is like a body without a soul"
        document.getElementById("b4Wrapper").classList.remove("classImages1")
        document.getElementById("b4Wrapper").classList.remove("classImages2")
        document.getElementById("b4Wrapper").classList.remove("classImages3")
        document.getElementById("b4Wrapper").classList.remove("classImages4")
        document.getElementById("b4Wrapper").classList.remove("classImages5")
        document.getElementById("b4Wrapper").classList.remove("classImages6")
        document.getElementById("b4Wrapper").classList.remove("classImages7")
        document.getElementById("b4Wrapper").classList.remove("classImages8")
        document.getElementById("b4Wrapper").classList.add("classImages9")
        document.getElementById("b4Wrapper").classList.remove("classImages10")
    },80000)
    setTimeout(function()
    {
        document.getElementById("b4Thought").innerHTML="So many books, so little time"
        document.getElementById("b4Wrapper").classList.remove("classImages1")
        document.getElementById("b4Wrapper").classList.remove("classImages2")
        document.getElementById("b4Wrapper").classList.remove("classImages3")
        document.getElementById("b4Wrapper").classList.remove("classImages4")
        document.getElementById("b4Wrapper").classList.remove("classImages5")
        document.getElementById("b4Wrapper").classList.remove("classImages6")
        document.getElementById("b4Wrapper").classList.remove("classImages7")
        document.getElementById("b4Wrapper").classList.remove("classImages8")
        document.getElementById("b4Wrapper").classList.remove("classImages9")
        document.getElementById("b4Wrapper").classList.add("classImages10")
    },90000)
}

