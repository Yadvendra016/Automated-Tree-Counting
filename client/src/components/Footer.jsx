import React from "react";

function Footer() {

  return (
    <div  className="flex flex-row justify-between justify-items-center items-center fixed bottom-0 bg-gray-200 left-0 w-full text-black px-24 pt-4 pb-2">
     
      <div>
        <a href="https://github.com/Yadvendra016/Automated-Tree-Counting" className="flex flex-row no-underline gap-3 text-black hover:underline">
            <img
              src="/images/github-mark.png"
              className="w-8 h-8"
              alt="github-logo"
            ></img>

            <p>View Source Code</p>
        </a>
      </div>

      <div>
        <p>&#169; 2023, EcoSphere. All Rights Reserved.</p>
      </div>

    </div>
  );
}

export default Footer;
