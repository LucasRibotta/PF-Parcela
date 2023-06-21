import HomeTitle from "../HomeTitle/HomeTitle"

export default function HomeSection() {
  return (
    <div className="inset-0 ">
      <video
        autoPlay
        loop
        muted
        className="w-full 2xl:h-[650px] h-screen object-cover bg-black opacity-90 brightness-50 contrast-90"
      >
        <source src="/homeVideo.mp4" type="video/mp4" />
      </video>
      <HomeTitle />
    </div>
  )
}
