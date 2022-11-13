function Footer() {
  return (
    <div className="pt-10 bg-dark flex-initial text-xs">
      <div className="pb-2">
        <div className="flex-center gap-x-2 flex-wrap">
          <h4 className="text-sm">report a bug/suggestions :</h4>
          <a
            className="text-blue-500 cursor-pointer"
            href="mailto:stupidThingSpam@gmail.com"
          >
            stupidThingSpam@gmail.com
          </a>
          <a
            className="text-blue-300 cursor-pointer"
            href="https://telegram.me/cheechqt"
          >
            Telegram
          </a>
        </div>
        <div className="flex-center gap-x-2">
          <h4 className="text-sm">
            put a star on{" "}
            <a
              className="text-gray-500 cursor-pointer"
              href="https://github.com/cheechqt/liquidation-calc"
            >
              github
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
