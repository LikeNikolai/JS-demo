# JS-demo

:root {
--accent-color: #D41443;
--secondary-accent-color: #FFA5BA;
--primare-bg-color: #FFFFFF;
--secondary-bg-color: #FFF5F6;
--card-set-gap: 30px;
--section-set-gap: 94px;
--primary-text-color: #907E82;
--accent-text-color: #000000;
--timing-function: cubic-bezier(0.4, 0, 0.2, 1);
--time-duration: 250ms;
}

@mixin centeredFlex() {
display: flex;
align-items: center;
justify-content: center;
}
@mixin font($fw, $fs, $lh, $ls, $ta, $c) {
font-weight: $fw;
font-size: $fs;
line-height: calc($lh / $fs);
letter-spacing: $ls;
text-align: $ta;
// font-family: $ff;
color: $c;
}
