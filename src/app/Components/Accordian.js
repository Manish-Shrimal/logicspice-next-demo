import React, { useState } from 'react';

const AccordionItem = ({ headerTitle, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {headerTitle}
      </button>
      {isOpen && (
        <div className="panel-body">
          {children}
        </div>
      )}
    </div>
  );
};

const Accordion = ({ children }) => {
  return <div>{children}</div>;
};

export { Accordion, AccordionItem };
