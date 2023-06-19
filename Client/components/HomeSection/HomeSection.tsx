export default function HomeSection() {
  return (
    <div className="absolute inset-0">
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src="/homeVideo.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
