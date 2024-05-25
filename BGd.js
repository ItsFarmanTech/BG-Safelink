document.addEventListener('DOMContentLoaded', function() {
var BGp = document.getElementById( "bgLoad");
BGp.innerHTML = `
<h1 class='ifth1'><u>BG-SAFELINK</u></h1>
<div class='foil-image iftbtn-1 iftbtn-2' style='padding:8px 16px !important'></div>
<div style='padding-top:15px;'></div>
<div class='separator foil-image' style='clear:both;text-align:center;width:fit-content;'><img alt='BG-Safelink © ItsFarmannTech' border='0' data-original-height='385' data-original-width='680' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEguNG-5VKQcxTnsWRhCDlghsNY86Mfc3ioWA6iMjmkNgtwHKthj_p3cDp53X94hNcq-sxZ2yK8OlL023XGyQKeQgq9fWJmFmauB7282HBgiOpc3XT5bDPsLIxiKoAXy3ObvZ9_ZRlGA0fiGqE6IGNX6ee_YF878tLLR_ul1ICNMkss-2gY9MZYCzOiIidTl/s600/BG-Safelink.png' style='max-width: 100%;' width='600'/></div><br/><a href='https://tinylink.onl/zDA8' rel='noopener noreferrer' style='border-top:1px solid #ddd;color:#333;display:block;padding:20px 35px;text-align:center;font-family:georgia;text-decoration:underline' target='_blank'>Like what you see? Click here to buy this paid script from ItsFarmanTech!</a>
<div class='panel panel-primary'>
  <div class='panel-body'>
    <div class='form-group'>
      <div class='input-group'>
        <input class='form-control' id='generateurl' placeholder='Paste your link here...' required='required' type='url'></input>
        <span class='input-group-btn'>
          <button class='btn btn-primary primary-color primary-color-border' id='btngenerate' required='required' type='button'><i aria-hidden='true' class='fa fa-shield fa-fw'></i> Generate</button>
        </span>
        <div id='inval' style='display: none;padding-top: 25px;color: red;'></div>
      </div>
    </div>
    <div class='text-center' id='generateloading' style='display: none;'><i class='fa fa-cog fa-spin'></i></div>
    <div id='generatelink' style='display: none;'>
      <div class='form-group has-success'>
        <div class='input-group'>
          <input class='form-control' id='resulturl' onclick='this.focus();this.select()' readonly='readonly' type='text'></input>
        </div>
        <br/>
        <div class='text-center'>
          <button class='copytoclipboard btn-sm btn btn-success' id='copytoclipboard'><span class='fa fa-floppy-o'></span> Copy URL</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div class='ticksvg ifth1' style='text-align: center;color:#000;padding:15px;'>&#169; ItsFarmanTech <svg viewBox='0 0 24 24'><path d='M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z'></path></svg>, All rights reserved.</div>
`;
});
