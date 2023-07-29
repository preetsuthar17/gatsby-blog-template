import { useEffect } from "react"

const GoogleFundingChoices = () => {
  useEffect(() => {
    function loadGoogleFundingChoices() {
      if (!window.frames["googlefcPresent"]) {
        if (document.body) {
          const iframe = document.createElement("iframe")
          iframe.style.cssText =
            "width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;"
          iframe.style.display = "none"
          iframe.name = "googlefcPresent"
          document.body.appendChild(iframe)
        } else {
          setTimeout(loadGoogleFundingChoices, 0)
        }
      }
    }

    loadGoogleFundingChoices()
  }, [])

  useEffect(() => {
    const script = document.createElement("script")
    script.async = true
    script.src =
      "https://fundingchoicesmessages.google.com/i/pub-2501084062179551?ers=1"
    script.nonce = "VsD6nbMOOkb6w2CnsEG62A"

    const headElement = document.getElementsByTagName("head")[0]
    headElement.appendChild(script)

    return () => {
      headElement.removeChild(script)
    }
  }, [])

  return null
}

export default GoogleFundingChoices
