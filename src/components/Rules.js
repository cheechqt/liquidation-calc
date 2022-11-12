import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";

function Rules() {
  return (
    <div className="text-white p-1 border border-white text-center mt-7">
      <h1 className="underline text-xl">rules</h1>
      <h2 className="text-green-500 text-xl">isolated margin</h2>
      <h2 className="text-red-500 text-xl">all calculations are random</h2>
      <div>
        Report an error:
        <div>
          <a
            className="text-blue-700 cursor-pointer"
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
      <div>
        <h3>first of all/ all crypto exchanges are scams </h3>
        <div className="flex items-start justify-center">
          <img
            className="max-w-[140px] sm:max-w-[240px]"
            src={p1}
            alt="screenshot"
          />
          <img
            className="max-w-[140px] sm:max-w-[240px]"
            src={p2}
            alt="screenshot"
          />
        </div>
      </div>
      <p>
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
