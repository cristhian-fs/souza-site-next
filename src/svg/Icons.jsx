import * as React from "react"
export const LogoHeader = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    {...props}
  >
    <mask
      id="b"
      width={128}
      height={22}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="url(#a)" d="M0 .21h128v21.211H0z" />
    </mask>
    <g mask="url(#b)">
      <path fill="url(#c)" d="M0 .21h128v21.211H0z" />
    </g>
    <defs>
      <linearGradient
        id="c"
        x1={-16.808}
        x2={105.934}
        y1={-34.699}
        y2={75.912}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0A0816" />
        <stop offset={0.37} stopColor="#DEDCFF" />
        <stop offset={0.37} stopColor="#DEDCFF" />
        <stop offset={1} stopColor="#333357" />
      </linearGradient>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#d" transform="scale(.00571 .03448)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK8AAAAdCAYAAADckDwLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEV0lEQVR4nO2c7XEiMQyGXzHXAFcCVwJXgQdKuJQAJSQlJCVACaEEmK3gaIESbkvw/Vgt8RJ7/bGy2ZB9ZzKZIWCE9GBbshwCgErTEsA7gAXkdAHwpEifQ19QadoAeAUwF7TjxHbUEXY8sx2mXhTpNymjKk1HACvzMUWaQp+bqDOAbUxMUlRpmqPx3ybh5Rc0vj74njjj30fIggse78hfDK/4eTvIggs0QT+yQ7+7lmh8kQJVkNjPR6SBCzTcvFeavDzOKk0ryAPTao5wgIMgT1QbtAngJiY7Xl1EZYArEUs/vAJv4lMowLnBmgDu6rXStJMaTBjcIP1wPF6j2R+laI7PH6AFeB2537rwT4oW+PztbQFex+yBR6Che1RbTABgw8tzVE5wKw+4ISzZYuWVC96zIr2OHawVf6Nv9zwpAO9Tk6Qeh345gBXpl6FjOJJQ4CMnSErkPOAGJe09tvUqy7ZBkd4C2Fv+FLMHHmpDDWAN+7f+220heBJ4QjMT3qr1R1RcPOCeAfzOWdlwwbsYGtgegA+5SzWGDT6A30vYMRZx+WkNO8AtiEEKADf7yjaD/YO0ZS5pgPf8WDF5AJaonX4p8cTxC3Z/zLn61KsxgAsAM/4w2ZZWA+Di4Bo2tACnJn8PJcMfp9jX8tbiL+4MLvCxbci6N2RoBycdA22oMcF7FfsjCl4G13WgVRRcgOEtkdx8lcx+kl0GuDYOioMLGKUyRbquNK3hLi/9q+xH7y4VOUd/ZGXqOUm1Y1TgAjfVBs8MHKuk8sukjnL0nKTI1XNyN3ABS6lMGOBidd1HE598jaUObYvfAXcEF3DUeSeAR6F7zLgXRTokiTsr0oOOlCXkOh4298CviHOkZG/DpK6G9JyEjB16FD+K5NsJL3CdgaNrs4K9DZO6GtRz8mj6BG+laT50OVCkt1yZmAB+TK0qTTrwuQcAbzni3dnzttc3JPo8Pc05oT0FY0lYAEFb2M9jqCKU0B9kynmu8N5c39hkBnhhOUO3zfbPOa+s9CibLYafU+Bd3ckfQ9Xe3hCdjGaAs9FCEuCQJcOV5e7uELAstngaWjoXDnuy/nv4Q0LibajtzOvqZBcBGAHZqSJ9gTs5LBqwHLYEdGLZ3s+V/e8qTdHN2yOQKMBtb8MZ7j5PKYC9UqT3GA/AYrakthDyDQoXwM+l4mLRSZGmvh8AP5H5IkCnWSHgDDu1CrG0jLl2LY0Mhisw0W18fXa4/leCsC2ulS3oeNVjw5C4XMfou2pkqSycQkp2AVeE2i4/m386fPBK0xmnUypTpM9Gc84tbMVOyBTpPZfabAEr2kCe0ZbgvgCPDaM9ufQ0e8Veulzixt+23oa+LUQxeZbtospgS3RDC9vguoM2WhmtBuJ2u3obcgNch5yhFwA4eAsiaEtyJ5bnDtpolQiw9+KA8/awAbD0yciFxw2SAY30LYgTIm93CNhywsBOrIxxySrDbt+EUaPpA/f6+D8Xb29Z95zJqwAAAABJRU5ErkJggg=="
        id="d"
        width={175}
        height={29}
      />
    </defs>
  </svg>
)
