import { Children, cloneElement } from 'react';

function ChildrenColumn({ children, setIsDropdownOpen }) {
  return (
    <div className='column'>
      {Children.map(children, (child) =>
        cloneElement(child, { setIsDropdownOpen })
      )}
    </div>
  );
}

export default ChildrenColumn;
