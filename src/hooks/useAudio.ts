import { useEffect, useRef, useState } from 'react';
export function useAudio(src:string){
 const ref=useRef<HTMLAudioElement|null>(null); const [playing,setPlaying]=useState(false);
 useEffect(()=>{const a=new Audio(src);a.loop=true;a.volume=.48;ref.current=a; const on=()=>setPlaying(!a.paused); a.addEventListener('play',on);a.addEventListener('pause',on); a.play().catch(()=>{}); const start=()=>{a.play().catch(()=>{});window.removeEventListener('pointerdown',start);window.removeEventListener('keydown',start)}; window.addEventListener('pointerdown',start,{once:true});window.addEventListener('keydown',start,{once:true});return()=>{a.pause();a.removeEventListener('play',on);a.removeEventListener('pause',on);window.removeEventListener('pointerdown',start);window.removeEventListener('keydown',start)}} , [src]);
 const toggle=()=>{const a=ref.current;if(!a)return;a.paused?a.play().catch(()=>{}):a.pause()}; return {playing,toggle};
}
