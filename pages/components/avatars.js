import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
const gods=['Poseidon','Athena', 'Hephaestus','Zeus','Apollo','Hermes','Hades','Ares','Gera','Aphrodite','Artemis','Dinoyus']
const Avatars = () => {
  const [size, setsize] = useState(200);
    return (
      <div className="flex">
        {gods.map((god) => (
          <Image
            key={god}
            src={`/${god}.png`}
            alt={`icon of ${god}`}
            width={size}
            height={size}
            title={god}
            className="cursor-pointer hover:animate-pulse"
          />
        ))}
      </div>
    );
}

export default Avatars;
