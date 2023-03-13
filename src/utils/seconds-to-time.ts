export default function secondsTime(seconds: number): string{
    const zeroLeft = (n:number) => Math.floor(n)
    const min = zeroLeft((seconds / 60) % 60);
    const segundos = zeroLeft((seconds % 60) % 60);
    return `${min}:${segundos}`;
}