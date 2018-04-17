import React from 'react'

let TelegramIcon = ({ className, height = '2.4rem' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 240 240"
    className={className}
    height={height}
    aria-hidden="true">
    <defs>
      <linearGradient id="b" x1="0.6667" y1="0.1667" x2="0.4167" y2="0.75">
        <stop stopColor="#37aee2" offset="0" />
        <stop stopColor="#1e96c8" offset="1" />
      </linearGradient>
      <linearGradient id="w" x1="0.6597" y1="0.4369" x2="0.8512" y2="0.8024">
        <stop stopColor="#eff7fc" offset="0" />
        <stop stopColor="#fff" offset="1" />
      </linearGradient>
    </defs>
    <circle cx="120" cy="120" r="120" fill="url(#b)" />
    <path
      fill="#c8daea"
      d="m98 175c-3.8876 0-3.227-1.4679-4.5678-5.1695L82 132.2059 170 80"
    />
    <path
      fill="#a9c9dd"
      d="m98 175c3 0 4.3255-1.372 6-3l16-15.558-19.958-12.035"
    />
    <path
      fill="url(#w)"
      d="m100.04 144.41 48.36 35.729c5.5185 3.0449 9.5014 1.4684 10.876-5.1235l19.685-92.763c2.0154-8.0802-3.0801-11.745-8.3594-9.3482l-115.59 44.571c-7.8901 3.1647-7.8441 7.5666-1.4382 9.528l29.663 9.2583 68.673-43.325c3.2419-1.9659 6.2173-0.90899 3.7752 1.2584"
    />
  </svg>
)

export default TelegramIcon
