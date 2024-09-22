import { useRef } from "react"


const LoginPopup = ({ loginPopup, toggleLoginPopup }) => {
  const loginPopupRef = useRef();

  window.addEventListener("click", (e) => {
    if (loginPopupRef.current === e.target) {
      toggleLoginPopup();
    }
  });

  return (
    <div>
      {loginPopup && (
        <div ref={loginPopupRef} className="fixed top-0 left-0 w-full h-full z-50 overflow-y-auto">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-auto">login popup</div>
        </div>
      )}
    </div>
  )
}

export default LoginPopup