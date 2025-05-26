import React from 'react';
import '../softwares.css'; // Assuming you have a CSS file for styling

const TableRow = ({ feature, logicspice, others, isEven }) => {
  return (
    <tr className={isEven ? 'even-row' : 'odd-row'}>
      <td className="feature-cell">{feature}</td>
      <td className="logicspice-cell">{logicspice}</td>
      <td className="others-cell">{others}</td>
    </tr>
  );
};

export default TableRow;