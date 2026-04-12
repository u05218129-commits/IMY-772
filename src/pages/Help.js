// import "./Help.css";
// import { useState } from "react";

// function Help() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   const faqs = [
//     {
//       question: "This is the text",
//       answer: "This is the answer to the question. You can put anything here."
//     },
//     {
//       question: "Another question",
//       answer: "Another answer goes here."
//     }
//   ];

//   return (
//     <div class="help-content">
//       <div class="user-guide">
//         <div class="section-title">
//           User Guide
//         </div>
//       </div>

//       <div class="faq-section">
//         <div class="section-title">
//           FAQ
//         </div>
//         <div class="faq-container">
//           <div class="faq-block">
//             <div class="block-left">
//               <div class="icon">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
//                   viewBox="0 0 24 24" fill="none" stroke="currentColor"
//                   stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//                   <path d="M12 3v10"></path>
//                   <path d="M8 11v2a4 4 0 0 0 8 0v-3a2 2 0 0 0-2-2h-1"></path>
//                   <path d="M6 13v1a6 6 0 0 0 12 0v-1"></path>
//                 </svg>
//               </div>
//               <div class="faq-body">
//                 this is the text
//               </div>
//             </div>

//             <div class="chevron-down">
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
//                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
//                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//                 <polyline points="6 9 12 15 18 9"></polyline>
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Help;


import { useState } from "react";
import "./Help.css";

function Help() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "This is the text",
      answer: "This is the answer to the question. You can put anything here."
    },
    {
      question: "Another question",
      answer: "Another answer goes here."
    }
  ];

  return (
    <div className="help-content">
      <div className="user-guide">
        <div className="section-title">User Guide</div>
      </div>

      <div className="faq-section">
        <div className="section-title">FAQ</div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              
              {/* CLICKABLE BLOCK */}
              <div
                className={`faq-block ${activeIndex === index ? "active" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="block-left">
                  
                  {/* ICON */}
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3v10"></path>
                      <path d="M8 11v2a4 4 0 0 0 8 0v-3a2 2 0 0 0-2-2h-1"></path>
                      <path d="M6 13v1a6 6 0 0 0 12 0v-1"></path>
                    </svg>
                  </div>

                  <div className="faq-body">
                    {faq.question}
                  </div>
                </div>

                {/* CHEVRON */}
                <div className="chevron-down">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>

              {/* ACCORDION ANSWER */}
              <div className={`faq-answer ${activeIndex === index ? "open" : ""}`}>
                <p>{faq.answer}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Help;