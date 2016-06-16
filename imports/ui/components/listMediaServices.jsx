import React from 'react';

export default class ListMediaServices extends React.Component {
  render() {
    return (
<ul className="list-media row">
    <li className="list-media--item col-xs-12 col-sm-4">
      <div className="list-media--media">
        <div className="list-media--img">
          <svg className="planet" width="160" height="160" viewBox="0 0 124 123" xmlns="http://www.w3.org/2000/svg">
            <title>Planet</title>
            <g transform="translate(10 10)" strokeWidth="2" fill="none" fill-rule="evenodd">
              <circle stroke="#333" cx="50.5" cy="50.5" r="39.5" />
              <circle stroke="#C1C1C1" cx="50.5" cy="50.5" r="50.5" />
              <circle className="planet--sun-one" stroke="#DE4F4F" fill="#FFF" cx="68" cy="86" r="6" />
              <circle className="planet--sun-two" stroke="#DE4F4F" fill="#FFF" cx="32" cy="4" r="4" />
              <path className="planet--sun-main" stroke="#DE4F4F" d="M56.405 66.697l-8.094 7.145-6.212-8.83-10.633-1.873 3.03-10.364-5.166-9.48 9.99-4.093 4.192-9.95 9.43 5.26 10.392-2.926 1.767 10.65 8.768 6.302-7.226 8.02.54 10.784z" />
              <path className="planet--sun-main" stroke="#DE4F4F" d="M61.74 62.74l-4.144 9.97-9.455-5.213-10.377 2.978-1.82-10.643-8.798-6.257 7.185-8.058-.593-10.78 10.78.593 8.058-7.185 6.257 8.798 10.643 1.82-2.978 10.378 5.212 9.456z" />
            </g>
          </svg>
        </div>
      </div>
      <div className="list-media--headline">
        WHAT
      </div>
      <div className="list-media--subline">
        to start with?
      </div>
    </li>
    <li className="list-media--item col-xs-12 col-sm-4">
      <div className="list-media--media">
        <div className="list-media--img">
          <svg className="rocket" width="160" height="160" viewBox="0 0 118 119" xmlns="http://www.w3.org/2000/svg">
            <title>Rocket</title>
            <g transform="translate(10 10) rotate(45 64.35 82.435)" strokeWidth="2" fill="none" fill-rule="evenodd">
              <path d="M15 16L30 1l15 15v60H15V16z" stroke="#333" />
              <path stroke="#333" fill="#FFF" d="M.858 76L15 61.858 29.142 76 15 90.142zM29.858 76L44 61.858 58.142 76 44 90.142z" />
              <path stroke="#333" fill="#FFF" d="M15.858 84L30 69.858 44.142 84 30 98.142z" />
              <path className="rocket--fire" stroke="#DE4F4F" d="M20.1 98l9.9-9.9 9.9 9.9-9.9 9.9z" />
              <path className="rocket--fire" stroke="#DE4F4F" d="M25.757 107L30 102.757 34.243 107 30 111.243z" />
              <circle stroke="#DE4F4F" cx="30" cy="29" r="7" />
              <path className="rocket--path" d="M7 92v21.024M52 92v21.024M30 117v21.024" stroke="#979797" />
            </g>
          </svg>
        </div>
      </div>
      <div className="list-media--headline">
        WHICH
      </div>
      <div className="list-media--subline">
        technology to choose?
      </div>
    </li>
    <li className="list-media--item col-xs-12 col-sm-4">
      <div className="list-media--media">
        <div className="list-media--img">
          <svg className="constellation" width="160" height="160" xmlns="http://www.w3.org/2000/svg" viewBox="-24 26 111 110">
            <style>{"\
              .constellation .st0{fill:none;stroke:#333333;stroke-width:2;}\
              .constellation .st1{fill:#FFFFFF;stroke:#DE4F4F;stroke-width:2;}\
              .constellation .st2{fill:none;stroke:#C1C1C1;stroke-width:2;}\
            "}</style>
            <title>Group Copy</title>
            <g transform="translate(10 10)" strokeWidth="2" fill="none" fill-rule="evenodd">
              <path id="Path-55" className="st0" d="M-18 100.3l35.2 7.7L45 95 23.3 69.7l24.5-3.1L63.1 39" />
              <path id="Rectangle-15" className="st1 constellation--star-one" d="M-11.135 101.5l-6.364 6.365-6.363-6.364 6.364-6.363z" />
              <path id="Rectangle-15-Copy" className="st1" d="M23.865 107.5l-6.364 6.365-6.363-6.364 6.364-6.363z" />
              <path id="Rectangle-15-Copy-3" className="st1 constellation--star-two" d="M29.864 68.5l-6.363 6.364-6.363-6.364 6.364-6.364z" />
              <path className="st2" d="M-12.2 67l4.2-4.2 4.2 4.2-4.2 4.2-4.2-4.2zm80 14l4.2-4.2 4.2 4.2-4.2 4.2-4.2-4.2zm-20 40l4.2-4.2 4.2 4.2-4.2 4.2-4.2-4.2zm-20-90l4.2-4.2 4.2 4.2-4.2 4.2-4.2-4.2z" />
              <path id="Rectangle-15-Copy-4" className="st1" d="M54.865 66.5L48.5 72.864 42.138 66.5l6.364-6.364z" />
              <path id="Rectangle-15-Copy-5" className="st1" d="M69.865 38.5L63.5 44.864 57.138 38.5l6.364-6.364z" />
              <path id="Rectangle-15-Copy-2" className="st1 constellation--star-three" d="M52.486 95L44 103.485 35.517 95 44 86.515z" />
            </g>
          </svg>
        </div>
      </div>
      <div className="list-media--headline">
        WHERE
      </div>
      <div className="list-media--subline">
        to find right people?
      </div>
    </li>
  </ul>

    );
  }
}
