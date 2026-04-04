export function Letterbox() {
  return (
    <>
      <div
        className="letterbox-bar fixed top-0 left-0 right-0 z-50 bg-[#050505]"
        style={{ height: '12vh' }}
        aria-hidden="true"
      />
      <div
        className="letterbox-bar fixed bottom-0 left-0 right-0 z-50 bg-[#050505]"
        style={{ height: '12vh' }}
        aria-hidden="true"
      />
    </>
  )
}
