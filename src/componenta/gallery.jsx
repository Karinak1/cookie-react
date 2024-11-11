import { useState } from 'react';
import { useEffect } from 'react';

export default function Gallery() {
  const [count, setCount] = useState(0);
  const [cps, setCps] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((current) => current + cps);
    }, 1000);
    return () => clearInterval(interval);
  }, [cps]);
  function buyUpgrade() {
    setCps(cps + 1);
  }

  return (
    <div className="cookie">
      <img
        src="../assets/images.jpg"
        className="image"
        onClick={handleClick}
      ></img>

      <h2>COOKIES:{count}</h2>
      <h2>CPS:{cps}</h2>
      <button className="buy" onClick={buyUpgrade}>
        BUY UPGRADE
      </button>
    </div>
  );
}
