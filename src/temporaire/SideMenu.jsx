import { useState, useEffect } from 'react';
import "./sideMenu.css";


  
function SideMenu({ anchors }) {

  const [activeAnchor, setActiveAnchor] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentAnchor = anchors.findIndex(anchor =>
        document.getElementById(anchor.id).getBoundingClientRect().top >= 0
      );
      setActiveAnchor(currentAnchor > 0 ? currentAnchor   : 0);
    };
      

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [anchors]);

  const handleAnchorClick = anchorIndex => {
    const element = document.getElementById(anchors[anchorIndex].id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="containerSideMenu">
    <nav className="side-menu">
      {anchors.map((anchor, index) => (
        <button
          key={index}
          className={`side-menu-button ${activeAnchor === index ? 'activeSection' : ''}`}
          onClick={() => handleAnchorClick(index)}
        />
      ))}
    </nav>
    </div>
  );
}

export default SideMenu;
