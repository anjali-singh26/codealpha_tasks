const music=document.querySelector("audio");
const play=document.getElementById("play");
const img=document.querySelector("img");
const title=document.getElementById("title");
const artist=document.getElementById("artist");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
let progress=document.getElementById("progress");
let Duration=document.getElementById("total_time");
let current_Time=document.getElementById("current_time");
const progress_div=document.getElementById("progress_div");

const songs=[{
    name:"song1",
    artist:"AKSHATH ACHARYA",
    title:"NADAANIYAN"
     },
   {
       name:"song2",
       artist:" KING",
       title:"MAAN MERI JAAN"
        },
   {
    name:"song3",
    artist:"ATIF ASLAM",
    title:"JEENE LAGA HOON"
     }
    ]

isPlaying=false;
const playMusic=()=>{
    isPlaying=true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    img.classList.add("anime");
};
const pauseMusic=()=>{
    isPlaying=false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
};
play.addEventListener("click",()=>{
    if(isPlaying){
       pauseMusic();
    } else{
        playMusic();
    }

});

const loadSong=(songs)=>{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src="music/"+songs.name+".mp3";
    img.src="images/"+songs.name+".jpg";
}
let songIndex=0;
const nextSong=()=>{
    songIndex=(songIndex+1)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
    }
    const prevSong=()=>{
        songIndex=(songIndex-1+songs.length)%songs.length;
        loadSong(songs[songIndex]);
        playMusic();
        }
       
       
music.addEventListener("timeupdate",(event)=>
{     
    // console.log(event);
    const {currentTime,duration} = event.target;
    let progress_time=(currentTime/duration)*100;
    progress.style.width=`${progress_time}%`;
    // music duration update
    let min_duration= Math.floor(duration/60);
    let sec_duration=Math.floor(duration%60);
    let tot_duration=`${min_duration}:${sec_duration}`;
    if(duration)
     { Duration.textContent=`${tot_duration}`;
     }
    //  current duration update
    let min_currentTime= Math.floor(currentTime/60);
    let sec_currentTime=Math.floor(currentTime%60);
    
    if(sec_currentTime<10)
     { sec_currentTime=`0${sec_currentTime}`;
     }
     let tot_currentTime=`${min_currentTime}:${sec_currentTime}`;
     current_Time.textContent=`${tot_currentTime}`;
});
progress_div.addEventListener('click',(event)=>{

    const {duration} = music;
  let move_progress=(event.offsetX/event.target.clientWidth)*duration;
  music.currentTime=(move_progress);
});

music.addEventListener("ended",()=>nextSong());
next.addEventListener("click",()=>nextSong());
prev.addEventListener("click",()=> prevSong());