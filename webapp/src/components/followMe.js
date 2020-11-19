import React from "react"
import cx from "classnames"
import { Link } from "gatsby"

function FollowMe({className, ...rest}) {
  return (
    <div {...rest} className={"text-customGray flex justify-between items-center w-40 " + className}>
      Follow Me:
      <Link to="https://www.linkedin.com/in/mayowa-adam-72b4b81b2/">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.125 14V4.65625H0.21875V14H3.125ZM1.65625 3.40625C2.59375 3.40625 3.34375 2.625 3.34375 1.6875C3.34375 0.78125 2.59375 0.03125 1.65625 0.03125C0.75 0.03125 0 0.78125 0 1.6875C0 2.625 0.75 3.40625 1.65625 3.40625ZM13.9688 14H14V8.875C14 6.375 13.4375 4.4375 10.5 4.4375C9.09375 4.4375 8.15625 5.21875 7.75 5.9375H7.71875V4.65625H4.9375V14H7.84375V9.375C7.84375 8.15625 8.0625 7 9.5625 7C11.0625 7 11.0938 8.375 11.0938 9.46875V14H13.9688Z" fill="#989898" />
        </svg>
      </Link>
      <Link to="https://twitter.com/bams_wears">
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.3438 3.75C14.9688 3.28125 15.5312 2.71875 15.9688 2.0625C15.4062 2.3125 14.75 2.5 14.0938 2.5625C14.7812 2.15625 15.2812 1.53125 15.5312 0.75C14.9062 1.125 14.1875 1.40625 13.4688 1.5625C12.8438 0.90625 12 0.53125 11.0625 0.53125C9.25 0.53125 7.78125 2 7.78125 3.8125C7.78125 4.0625 7.8125 4.3125 7.875 4.5625C5.15625 4.40625 2.71875 3.09375 1.09375 1.125C0.8125 1.59375 0.65625 2.15625 0.65625 2.78125C0.65625 3.90625 1.21875 4.90625 2.125 5.5C1.59375 5.46875 1.0625 5.34375 0.625 5.09375V5.125C0.625 6.71875 1.75 8.03125 3.25 8.34375C3 8.40625 2.6875 8.46875 2.40625 8.46875C2.1875 8.46875 2 8.4375 1.78125 8.40625C2.1875 9.71875 3.40625 10.6562 4.84375 10.6875C3.71875 11.5625 2.3125 12.0938 0.78125 12.0938C0.5 12.0938 0.25 12.0625 0 12.0312C1.4375 12.9688 3.15625 13.5 5.03125 13.5C11.0625 13.5 14.3438 8.53125 14.3438 4.1875C14.3438 4.03125 14.3438 3.90625 14.3438 3.75Z" fill="#989898" />
        </svg>
      </Link>
      <Link to="https://www.instagram.com/blakj3zuz/">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 3.40625C6 3.40625 4.40625 5.03125 4.40625 7C4.40625 9 6 10.5938 8 10.5938C9.96875 10.5938 11.5938 9 11.5938 7C11.5938 5.03125 9.96875 3.40625 8 3.40625ZM8 9.34375C6.71875 9.34375 5.65625 8.3125 5.65625 7C5.65625 5.71875 6.6875 4.6875 8 4.6875C9.28125 4.6875 10.3125 5.71875 10.3125 7C10.3125 8.3125 9.28125 9.34375 8 9.34375ZM12.5625 3.28125C12.5625 2.8125 12.1875 2.4375 11.7188 2.4375C11.25 2.4375 10.875 2.8125 10.875 3.28125C10.875 3.75 11.25 4.125 11.7188 4.125C12.1875 4.125 12.5625 3.75 12.5625 3.28125ZM14.9375 4.125C14.875 3 14.625 2 13.8125 1.1875C13 0.375 12 0.125 10.875 0.0625C9.71875 0 6.25 0 5.09375 0.0625C3.96875 0.125 3 0.375 2.15625 1.1875C1.34375 2 1.09375 3 1.03125 4.125C0.96875 5.28125 0.96875 8.75 1.03125 9.90625C1.09375 11.0312 1.34375 12 2.15625 12.8438C3 13.6562 3.96875 13.9062 5.09375 13.9688C6.25 14.0312 9.71875 14.0312 10.875 13.9688C12 13.9062 13 13.6562 13.8125 12.8438C14.625 12 14.875 11.0312 14.9375 9.90625C15 8.75 15 5.28125 14.9375 4.125ZM13.4375 11.125C13.2188 11.75 12.7188 12.2188 12.125 12.4688C11.1875 12.8438 9 12.75 8 12.75C6.96875 12.75 4.78125 12.8438 3.875 12.4688C3.25 12.2188 2.78125 11.75 2.53125 11.125C2.15625 10.2188 2.25 8.03125 2.25 7C2.25 6 2.15625 3.8125 2.53125 2.875C2.78125 2.28125 3.25 1.8125 3.875 1.5625C4.78125 1.1875 6.96875 1.28125 8 1.28125C9 1.28125 11.1875 1.1875 12.125 1.5625C12.7188 1.78125 13.1875 2.28125 13.4375 2.875C13.8125 3.8125 13.7188 6 13.7188 7C13.7188 8.03125 13.8125 10.2188 13.4375 11.125Z" fill="#989898" />
        </svg>
      </Link>
    </div>
  );
}

export default FollowMe;
