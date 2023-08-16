// import React, { useState } from 'react';

// const FloatWindows = (props) => {
//     const [counter , setCounter] = useState(1);
//     if (props.auth) {
//         if (counter < 2) {
//             const width = 600;
//             const height = 400;
//             const left = window.screen.width / 2 - width / 2;
//             const top = window.screen.height / 2 - height / 2;
            
//             const windowFeatures = `
//             width=${width},
//             height=${height},
//             left=${left},
//             top=${top},
//             resizable=no,
//             scrollbars=no,
//             toolbar=no,
//             menubar=no,
//             location=no,
//             status=no
//             `;
            
//             window.open('https://www.example.com', '_blank', windowFeatures);
//             setCounter(3);
//         }
//     }

//     return (
//         <div>
//         </div>
//     );
// };

// export default FloatWindows;
