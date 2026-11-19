import { Mail } from "lucide-react";

export default function Social(){
    return (
        <>
            <div className="portfolio-sidebar-bottom">
              <div className="portfolio-socials">

                <a
                  href="mailto:your-email@example.com"
                  aria-label="Email"
                >
                  <Mail size={23} />
                </a>
              </div>

              <a
                href="/cv.pdf"
                download
                className="portfolio-download"
              >
              </a>
            </div>
        </>
    )
}