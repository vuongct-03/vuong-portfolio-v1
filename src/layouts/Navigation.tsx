import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";

const navigation = [
    { id: "about", label: "GIỚI THIỆU" },
    { id: "skills", label: "KỸ NĂNG" },
    { id: "experience", label: "KINH NGHIỆM" },
    { id: "projects", label: "DỰ ÁN" },
    { id: "thesis", label: "KHÓA LUẬN" },
    { id: "contact", label: "LIÊN HỆ" },
];

export default function Navigation(){
    const [activeSection, setActiveSection] = useState("about");
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {  
        const visibleSections = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
            setActiveSection(
            visibleSections[0].target.id
            );
        }
        },
        {
        rootMargin: "-15% 0px -45% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
        }
    );

    navigation.forEach(({ id }) => {
        const element = document.getElementById(id);

        if (element) {
        observer.observe(element);
        }
    });

        return () => observer.disconnect();
    }, []);
    
    return (
        <>
            <Nav className="portfolio-nav flex-column">
                {navigation.map((item) => (
                  <Nav.Link
                    key={item.id}
                    href={`#${item.id}`}
                    className={["portfolio-nav-link", activeSection === item.id ? "active": "",].join(" ")}
                    onClick={() =>
                      setActiveSection(item.id)
                    }
                  >
                    <span className="nav-line" />
                    {item.label}
                  </Nav.Link>
                ))}
              </Nav>
        </>
    )
}