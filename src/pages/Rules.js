import { useState } from "react";
import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";

function Rules() {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="main-container mt-5">
      <h2 className="underline">rules</h2>
      <h3 className="text-green-500">isolated margin</h3>
      <h4 className="text-red-500">all calculations are random</h4>
      <div>
        Report an error:
        <div>
          <a
            className="text-blue-500 cursor-pointer"
            href="mailto:stupidThingSpam@gmail.com"
          >
            stupidThingSpam@gmail.com
          </a>
        </div>
        <div>
          <a
            className="text-blue-300 cursor-pointer"
            href="https://telegram.me/cheechqt"
          >
            Telegram
          </a>
        </div>
      </div>
      <div className="flex-center flex-col">
        <h3>first of all/ all crypto exchanges are scams </h3>
        <btn
          className="btn btn-primary text-xs w-[160px] mt-1"
          onClick={() => setIsShow(!isShow)}
        >
          {isShow ? "close" : "proof"}
        </btn>
        {isShow && (
          <div className="flex items-start justify-center flex-col md:flex-col mt-1">
            <img className="" src={p1} alt="screenshot" />
            <img className="" src={p2} alt="screenshot" />
          </div>
        )}
      </div>
      <p className="text-xs md:text-base mt-1 text-justify">
        The author is not responsible for the accuracy, completeness or quality
        of the information provided. No claims for material or non-material
        damage caused by the use or non-use of the information provided or the
        use of incorrect or incomplete information are accepted, unless this
        damage was a clear consequence of negligence or criminal intent of the
        author. All proposals are put forward without any obligations. The
        author reserves the right to change, delete or supplement the content of
        the website without prior notice, as well as to delete publications on
        the Internet temporarily or permanently.
      </p>
    </div>
  );
}

export default Rules;
