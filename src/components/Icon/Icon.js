const { h, Component } = require('preact');
const uppercase = require('../../util/uppercase');

const icons = {
  share: (
    <svg width="21px" height="17px" viewBox="0 0 21 17" version="1.1">
      <g id="Artboard" stroke="none" strokeWidth="1" fillRule="evenodd" transform="translate(-194.000000, -38.000000)">
        <g id="Group-3" transform="translate(194.000000, 38.000000)"  fillRule="nonzero">
          <path d="M16.2859277,9.29985876 C15.6324905,9.2710502 14.8978288,9.23168205 14.0094336,9.18015519 C8.63434345,8.86840032 6.84578163,8.92382253 5.11597929,9.70357701 C3.03420851,10.6419906 2,12.7815357 2,17 L0,17 C-2.33812969e-13,12.068518 1.39220517,9.1883583 4.29407251,7.8802643 C6.44994367,6.90844795 8.36150283,6.84921441 14.1252388,7.18351071 C15.2584766,7.24923843 16.1349948,7.29475528 16.9093807,7.3235943 L11.2928932,1.70710678 L12.7071068,0.292893219 L20.4142136,8 L12.7071068,15.7071068 L11.2928932,14.2928932 L16.2859277,9.29985876 Z" id="Combined-Shape"></path>
        </g>
      </g>
    </svg>
  ),
  text: (
    <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1">
      <g stroke="none" strokeWidth="1" fillRule="evenodd" transform="translate(-176.000000, -36.000000)">
        <path d="M186,58 L183,58 L183,56 L186,56 L186,38 L178,38 L178,42 L176,42 L176,36 L186,36 L198,36 L198,42 L196,42 L196,38 L188,38 L188,56 L191,56 L191,58 L186,58 Z" id="Combined-Shape"></path>
      </g>
    </svg>
  ),
  color: (
    <svg width="18px" height="26px" viewBox="0 0 18 26" version="1.1">
      <g stroke="none" fill="none" fillRule="evenodd" transform="translate(-37.000000, -28.000000)">
        <path d="M39,45 C39,48.8841865 42.1228445,52 46,52 C49.8771555,52 53,48.8841865 53,45 C53,42.6024824 50.6696273,37.9655412 46,31.4009936 C41.3303727,37.9655412 39,42.6024824 39,45 Z M46,54 C41.0294373,54 37,49.9998979 37,45 C37,41.7540973 40,36.0874307 46,28 C52,36.0874307 55,41.7540973 55,45 C55,49.9998979 50.9705627,54 46,54 Z" id="color" fill="#FFFFFF" fillRule="nonzero"></path>
      </g>
    </svg>
  ),
  new: (
    <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1">
      <g stroke="none" strokeWidth="1" fillRule="evenodd" transform="translate(-221.000000, -35.000000)">
        <path d="M230,42 L237,42 L237,44 L230,44 L230,51 L228,51 L228,44 L221,44 L221,42 L228,42 L228,35 L230,35 L230,42 Z" id="new"></path>
      </g>
    </svg>
  ),
  objects: (
    <svg width="26px" height="29px" viewBox="0 0 26 29" version="1.1">
      <g stroke="none" strokeWidth="1" fillRule="evenodd" transform="translate(-211.000000, -32.000000)">
        <path d="M213,52 L213,59 L220,59 L220,52 L213,52 Z M211,50 L222,50 L222,61 L211,61 L211,50 Z M231,49 C234.313708,49 237,51.6862915 237,55 C237,58.3137085 234.313708,61 231,61 C227.686292,61 225,58.3137085 225,55 C225,51.6862915 227.686292,49 231,49 Z M231,51 C228.790861,51 227,52.790861 227,55 C227,57.209139 228.790861,59 231,59 C233.209139,59 235,57.209139 235,55 C235,52.790861 233.209139,51 231,51 Z M223,32 L230,46 L216,46 L223,32 Z M219.236068,44 L226.763932,44 L223,36.472136 L219.236068,44 Z" id="Combined-Shape" fillRule="nonzero"></path>
      </g>
    </svg>
  ),
  play: (
    <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
      <g stroke="none" strokeWidth="1" fillRule="evenodd" transform="translate(-188.000000, -34.000000)">
        <path d="M190,37.236068 L190,50.763932 L203.527864,44 L190,37.236068 Z M208,44 L188,54 L188,34 L208,44 Z" id="Triangle" fillRule="nonzero"></path>
      </g>
    </svg>
  ),
  close: (
    <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1">
      <g id="100_IconGraveyard" stroke="none" stroke-width="1" fill="none" fillRule="evenodd" transform="translate(-578.000000, -26.000000)">
        <path d="M587.071068,33.6568542 L593.435029,27.2928932 L594.849242,28.7071068 L588.485281,35.0710678 L595.556349,42.1421356 L594.142136,43.5563492 L587.071068,36.4852814 L580.707107,42.8492424 L579.292893,41.4350288 L585.656854,35.0710678 L578.585786,28 L580,26.5857864 L587.071068,33.6568542 Z" id="Combined-Shape" fill="#FFFFFF" fillRule="nonzero"></path>
      </g>
    </svg>
  )
};

class Icon extends Component {
  render() {
    const {name} = this.props;
    return (
      <div className={`Icon${uppercase(name)}`}>
        {icons[name]}
      </div>
    )
  }
}

module.exports = Icon;
