import React from 'react';
import { IconType } from 'react-icons';

interface IconProps { 
  onClick: () => void;
  IconComponent: IconType 
}

const IconNetworks = ({IconComponent, onClick }: IconProps) => {
  return (
    <div className="cursor-pointer p-2 mt-4 bg-hv-yellow rounded-full text-black" onClick={onClick}>
      <IconComponent size={20} />
    </div>
  );
};

export { IconNetworks };