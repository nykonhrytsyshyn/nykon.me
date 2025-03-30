import type { IconId, IconProps } from "@type/icon";

import * as React from "react";
import { ReactElement } from "react";

//<editor-fold desc="Icon Components" defaultstate="collapsed">

export function HomeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M13.338.833a2 2 0 0 0-2.676 0L0 10.429v10.4a3.2 3.2 0 0 0 3.2 3.2h17.6a3.2 3.2 0 0 0 3.2-3.2v-10.4ZM15 22.026H9V17a3 3 0 0 1 6 0Zm7-1.2a1.2 1.2 0 0 1-1.2 1.2H17V17a5 5 0 0 0-10 0v5.026H3.2a1.2 1.2 0 0 1-1.2-1.2v-9.507l10-9 10 9Z"
        fill="currentColor"
      />
    </BaseIcon>
  );
}

export function AboutIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0M8 21.164V21c0-2.206 1.794-4 4-4s4 1.794 4 4v.164c-1.226.537-2.578.836-4 .836s-2.774-.299-4-.836m9.925-1.113C17.469 17.192 14.986 15 12 15s-5.468 2.192-5.925 5.051A10 10 0 0 1 2 12C2 6.486 6.486 2 12 2s10 4.486 10 10a10 10 0 0 1-4.075 8.051M12 5C9.794 5 8 6.794 8 9s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4m0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2"
        fill="currentColor"
      />
    </BaseIcon>
  );
}

export function WorkIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M19 4h-1.1A5.01 5.01 0 0 0 13 0h-2a5.01 5.01 0 0 0-4.9 4H5a5.006 5.006 0 0 0-5 5v10a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V9a5.006 5.006 0 0 0-5-5m-8-2h2a3 3 0 0 1 2.816 2H8.184A3 3 0 0 1 11 2M5 6h14a3 3 0 0 1 3 3v3H2V9a3 3 0 0 1 3-3m14 16H5a3 3 0 0 1-3-3v-5h9v1a1 1 0 0 0 2 0v-1h9v5a3 3 0 0 1-3 3"
        fill="currentColor"
      />
    </BaseIcon>
  );
}

export function GalleryIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <g fill="currentColor">
        <path d="M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5M5 2h14a3 3 0 0 1 3 3v14a2.95 2.95 0 0 1-.3 1.285l-9.163-9.163a5 5 0 0 0-7.072 0L2 14.586V5a3 3 0 0 1 3-3m0 20a3 3 0 0 1-3-3v-1.586l4.878-4.878a3 3 0 0 1 4.244 0l9.163 9.164A2.95 2.95 0 0 1 19 22Z" />
        <path d="M16 10.5A3.5 3.5 0 1 0 12.5 7a3.5 3.5 0 0 0 3.5 3.5m0-5A1.5 1.5 0 1 1 14.5 7 1.5 1.5 0 0 1 16 5.5" />
      </g>
    </BaseIcon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <g fill="currentColor">
        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0z" />
        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0z" />
      </g>
    </BaseIcon>
  );
}

export function MinersStudiosIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M14.898 5.484Q13.445 9.09 11.996 12.7q-1.441-3.61-2.894-7.215c-.27-.664-.528-1.304-.993-1.738-.468-.441-1.132-.648-1.808-.64a2.9 2.9 0 0 0-1.824.64c-.52.422-.86 1.031-.985 1.738l-1.258 7.211c-.675-.101-1.296.137-1.707.61-.468.547-.605 1.332-.433 2.172l1.101 5.418a16 16 0 0 1 2.23-1.836 14.5 14.5 0 0 1 2.352-1.297l1.032-6.524 1.687 5.606a14.7 14.7 0 0 1 3.5-.414 14.8 14.8 0 0 1 3.512.445l1.68-5.637 1.035 6.524c.812.363 1.593.797 2.328 1.297.797.543 1.543 1.16 2.23 1.836l1.125-5.418c.172-.84.035-1.625-.437-2.172a1.84 1.84 0 0 0-1.707-.606l-1.258-7.215c-.121-.707-.465-1.316-.98-1.738a2.9 2.9 0 0 0-1.825-.64c-.676-.008-1.34.199-1.808.64-.47.434-.723 1.074-.993 1.738m0 0"
        fill="currentColor"
      />
    </BaseIcon>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M12 .296c-6.627 0-12 5.372-12 12 0 5.302 3.438 9.8 8.206 11.387.6.111.82-.26.82-.577 0-.286-.011-1.231-.016-2.234-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.332-1.756-1.332-1.756-1.089-.745.082-.729.082-.729 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.419-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.469-2.381 1.237-3.221-.125-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0 1 12 6.099c1.02.005 2.047.138 3.006.404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.769.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.814 1.103.814 2.222 0 1.606-.014 2.898-.014 3.293 0 .319.216.694.824.576 4.766-1.589 8.2-6.085 8.2-11.385C24 5.669 18.627.296 12 .296"
        fill="currentColor"
      />
    </BaseIcon>
  );
}

export function TelegramIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.015-.15-.056-.212s-.174-.041-.248-.024q-.159.036-5.062 3.345-.718.493-1.302.481c-.428-.009-1.252-.242-1.865-.442-.751-.244-1.349-.374-1.297-.788q.04-.324.892-.663a586 586 0 0 1 6.998-3.015c3.333-1.386 4.025-1.627 4.477-1.635.566-.008.702.459.656.939"
        fill="currentColor"
      />
    </BaseIcon>
  );
}

export function YouTubeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M23.498 6.186a3.02 3.02 0 0 0-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.02 3.02 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.02 3.02 0 0 0 2.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.02 3.02 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814M9.546 15.569V8.431L15.818 12z"
        fill="currentColor"
      />
    </BaseIcon>
  );
}

export function TwitchIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <g fill="currentColor">
        <path d="M6 0 1.714 4.286v15.429h5.143V24l4.286-4.286h3.429L22.286 12V0zm14.571 11.143-3.429 3.429h-3.429l-3 3v-3H6.857V1.714h13.714z" />
        <path d="M16.286 4.714H18v5.143h-1.714zm-4.715 0h1.714v5.143h-1.714z" />
      </g>
    </BaseIcon>
  );
}

export function TikTokIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M22.465 9.866a9.8 9.8 0 0 1-5.74-1.846v8.385c0 4.188-3.407 7.594-7.594 7.594a7.55 7.55 0 0 1-4.352-1.376 7.59 7.59 0 0 1-3.242-6.218c0-4.188 3.407-7.595 7.595-7.595.348 0 .688.029 1.023.074v4.212a3.4 3.4 0 0 0-1.023-.16 3.47 3.47 0 0 0-3.468 3.469 3.47 3.47 0 0 0 3.469 3.468 3.47 3.47 0 0 0 3.462-3.338L12.598 0h4.126a5.75 5.75 0 0 0 5.74 5.741z"
        fill="currentColor"
      />
    </BaseIcon>
  );
}

export function XIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M18.9 1.153h3.682l-8.042 9.189L24 22.848h-7.405l-5.804-7.583-6.634 7.583H.469l8.6-9.831L0 1.153h7.593l5.241 6.931zm-1.293 19.494h2.039L6.482 3.239h-2.19z"
        fill="currentColor"
      />
    </BaseIcon>
  );
}

export function RedditIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <g fill="currentColor">
        <path d="M9.25 14.5c-.689 0-1.25-.561-1.25-1.25S8.561 12 9.25 12s1.25.561 1.25 1.25-.561 1.25-1.25 1.25m5.72 1.595a.324.324 0 0 1 0 .458c-.853.852-2.488.918-2.969.918s-2.116-.066-2.968-.918a.323.323 0 0 1 0-.458.323.323 0 0 1 .458 0c.538.538 1.688.728 2.51.728s1.972-.191 2.511-.729a.324.324 0 0 1 .458.001M16 13.25a1.251 1.251 0 0 1-2.5 0c0-.689.561-1.25 1.25-1.25s1.25.561 1.25 1.25" />
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m6.957 13.599q.04.26.041.526c0 2.692-3.134 4.875-7 4.875s-7-2.183-7-4.875q0-.268.042-.529a1.75 1.75 0 0 1 .716-3.346c.47 0 .896.186 1.21.488 1.212-.873 2.886-1.431 4.749-1.483l.89-4.185a.31.31 0 0 1 .37-.241l2.908.618A1.249 1.249 0 1 1 17 7.25c-.67 0-1.213-.529-1.244-1.191l-2.604-.554-.797 3.75c1.836.064 3.484.622 4.68 1.485a1.75 1.75 0 1 1 1.922 2.859" />
      </g>
    </BaseIcon>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <g fill="currentColor">
        <path d="M23.002 21.584h.227l-.435-.658c.266 0 .407-.169.409-.376l-.001-.025c0-.282-.17-.417-.519-.417h-.564v1.476h.212v-.643h.261zm-.425-.81h-.246v-.499h.312c.161 0 .345.026.345.237 0 .242-.186.262-.412.262m-5.285-1.701h-3.007v-4.709c0-1.123-.02-2.568-1.564-2.568-1.566 0-1.806 1.223-1.806 2.487v4.79H7.908V9.389h2.887v1.323h.04a3.17 3.17 0 0 1 2.848-1.564c3.048 0 3.609 2.005 3.609 4.612zM4.515 8.065a1.745 1.745 0 1 1 0-3.49 1.745 1.745 0 0 1 0 3.49m1.503 11.008h-3.01V9.389h3.01zM18.79 1.783H1.497A1.48 1.48 0 0 0 0 3.246V20.61c.01.818.68 1.473 1.497 1.464H18.79a1.485 1.485 0 0 0 1.503-1.464V3.245a1.484 1.484 0 0 0-1.503-1.463" />
        <path d="M22.603 19.451a1.383 1.383 0 1 0 .027 0zm.032 2.608c-.67.011-1.254-.522-1.265-1.192a1.213 1.213 0 1 1 2.426-.04v.02a1.187 1.187 0 0 1-1.161 1.212h-.031" />
      </g>
    </BaseIcon>
  );
}

export function MediumIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M13.537 12c0 3.764-3.03 6.815-6.769 6.815C3.03 18.815 0 15.764 0 12s3.03-6.815 6.769-6.815c3.738 0 6.768 3.051 6.768 6.815m7.426 0c0 3.543-1.515 6.415-3.384 6.415S14.195 15.543 14.195 12s1.515-6.415 3.384-6.415S20.963 8.457 20.963 12M24 12c0 3.174-.533 5.748-1.19 5.748S21.62 15.175 21.62 12s.533-5.748 1.19-5.748S24 8.826 24 12"
        fill="currentColor"
      />
    </BaseIcon>
  );
}

export function NPMIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M11.918 2.469h-9.34v18.058h9.34V7.023h4.75v13.504h4.754V2.47Zm0 0"
        fill="currentColor"
      />
    </BaseIcon>
  );
}

export function SpotifyIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M12.477.008C5.852-.254.273 4.902.007 11.523c-.26 6.625 4.895 12.204 11.516 12.47 6.625.26 12.204-4.895 12.47-11.516.26-6.625-4.895-12.204-11.516-12.47m5.066 17.582a.725.725 0 0 1-.727.355.8.8 0 0 1-.253-.09 14.4 14.4 0 0 0-5.137-1.746 14.3 14.3 0 0 0-5.418.266.72.72 0 0 1-.867-.531.713.713 0 0 1 .527-.864c1.95-.472 3.957-.57 5.957-.289a15.8 15.8 0 0 1 5.648 1.918c.344.2.465.633.27.98m1.574-3.152a.93.93 0 0 1-1.262.378 17.7 17.7 0 0 0-5.972-1.96 17.7 17.7 0 0 0-6.281.238.93.93 0 1 1-.398-1.82 19.64 19.64 0 0 1 13.538 1.902.93.93 0 0 1 .375 1.261m1.75-3.551a1.15 1.15 0 0 1-1.176.61 1.2 1.2 0 0 1-.37-.122 21.3 21.3 0 0 0-6.919-2.207c-2.43-.34-4.87-.27-7.257.215a1.147 1.147 0 0 1-.457-2.246 23.7 23.7 0 0 1 8.035-.239c2.687.38 5.261 1.2 7.656 2.446.562.293.781.984.488 1.547Zm0 0"
        fill="currentColor"
      />
    </BaseIcon>
  );
}

export function WakaTimeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M12 0C5.371 0 0 5.371 0 12s5.371 12 12 12 12-5.371 12-12S18.629 0 12 0m0 3.168c4.871 0 8.832 3.96 8.832 8.832 0 4.871-3.96 8.832-8.832 8.832-4.871 0-8.832-3.96-8.832-8.832 0-4.871 3.96-8.832 8.832-8.832M10.828 14.59h-.012a.6.6 0 0 1-.464-.235l-2.707-3.597a.593.593 0 0 1 .12-.832.593.593 0 0 1 .833.117l2.246 2.988.644-.793a.59.59 0 0 1 .461-.222h.004a.59.59 0 0 1 .461.222l.617.766 3.535-4.555a.595.595 0 0 1 .832-.105.6.6 0 0 1 .106.836l-3.996 5.148a.58.58 0 0 1-.461.23h-.008a.59.59 0 0 1-.46-.222l-.63-.777-.66.812a.59.59 0 0 1-.46.219"
        fill="currentColor"
      />
    </BaseIcon>
  );
}

export function SteamIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M11.98 0C5.68 0 .512 4.86.023 11.035l6.43 2.66a3.4 3.4 0 0 1 1.914-.59l.188.004 2.86-4.14V8.91a4.526 4.526 0 0 1 4.523-4.523 4.533 4.533 0 0 1 4.527 4.527 4.53 4.53 0 0 1-4.527 4.524h-.102l-4.078 2.91.004.16a3.39 3.39 0 0 1-3.39 3.394 3.415 3.415 0 0 1-3.333-2.726L.438 15.27C1.863 20.309 6.484 24 11.98 24c6.625 0 11.997-5.371 11.997-12S18.605 0 11.98 0M7.54 18.21l-1.474-.608a2.56 2.56 0 0 0 1.317 1.25 2.553 2.553 0 0 0 3.332-1.375c.262-.633.262-1.32.004-1.95a2.52 2.52 0 0 0-1.38-1.382 2.53 2.53 0 0 0-1.874-.032l1.52.63a1.88 1.88 0 0 1 1.011 2.456 1.88 1.88 0 0 1-2.457 1.012m11.413-9.304a3.02 3.02 0 0 0-3.012-3.015 3.015 3.015 0 1 0 0 6.031 3.017 3.017 0 0 0 3.012-3.016m-5.27-.004a2.26 2.26 0 0 1 2.262-2.265c1.25 0 2.27 1.011 2.27 2.265a2.27 2.27 0 0 1-2.27 2.266 2.264 2.264 0 0 1-2.261-2.266m0 0"
        fill="currentColor"
      />
    </BaseIcon>
  );
}

export function PatreonIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M22.957 7.21c-.004-3.065-2.39-5.577-5.191-6.483-3.477-1.125-8.063-.961-11.383.605-4.028 1.898-5.29 6.059-5.336 10.207-.04 3.414.3 12.399 5.367 12.461 3.766.047 4.328-4.805 6.07-7.14 1.239-1.665 2.836-2.133 4.801-2.618 3.375-.836 5.676-3.504 5.672-7.031m0 0"
        fill="currentColor"
      />
    </BaseIcon>
  );
}

export function StreamlabsIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M6.496 13.676c0-2.121 0-3.184.418-3.992a3.8 3.8 0 0 1 1.664-1.657c.817-.414 1.887-.414 4.024-.414h3.05c2.133 0 3.203 0 4.02.414.715.364 1.3.942 1.664 1.657.418.808.418 1.87.418 3.992v.867c0 2.121 0 3.184-.418 3.992a3.8 3.8 0 0 1-1.664 1.656c-.817.414-1.887.414-4.02.414H9.988c-1.222 0-1.832 0-2.3-.234a2.18 2.18 0 0 1-.95-.945c-.238-.461-.238-1.07-.238-2.285v-3.465Zm5.45.437a1.09 1.09 0 0 1 2.179 0v2.164c0 .598-.488 1.082-1.09 1.082-.601 0-1.09-.484-1.09-1.082Zm5.449-1.086c-.606 0-1.09.489-1.09 1.086v2.164c0 .598.488 1.082 1.09 1.082.597 0 1.09-.484 1.09-1.082v-2.164a1.09 1.09 0 0 0-1.09-1.086M10.3 4.34a1.085 1.085 0 0 1-.945 1.21 4.7 4.7 0 0 0-.828.169 5.98 5.98 0 0 0-3.941 3.914c-.07.234-.129.496-.172.82a1.09 1.09 0 0 1-1.215.945 1.09 1.09 0 0 1-.945-1.21 7 7 0 0 1 .25-1.2 8.14 8.14 0 0 1 5.371-5.336 6.6 6.6 0 0 1 1.207-.25 1.086 1.086 0 0 1 1.219.938m0 0"
        fill="currentColor"
        fillRule="evenodd"
      />
    </BaseIcon>
  );
}

export function DonatelloIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M6.05 1.5c-1.25.25-2.402.75-2.652 1.102-.699 1.097-.5 17.597.25 18.597 1.301 1.75 7 2.301 11.153 1.051C19.148 20.95 21.5 17.398 21.5 12c0-3.148-.898-6-2.398-7.648C16.8 1.8 10.852.5 6.05 1.5m8.348 5.648c.954.954 1.301 1.954 1.5 4 .403 4.75-1.648 7.352-5.648 7.352H8.5V5.352l2.3.296c1.598.153 2.75.653 3.598 1.5m0 0"
        fill="currentColor"
      />
    </BaseIcon>
  );
}

export function DiscordIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M14.82 4.26a10 10 0 0 0-.53 1.1 14.7 14.7 0 0 0-4.58 0 10 10 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A13 13 0 0 0 8.23 18a9.7 9.7 0 0 1-1.71-.83 3.4 3.4 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a11 11 0 0 1-1.71.84 12.4 12.4 0 0 0 1.08 1.78 16.4 16.4 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16 16 0 0 0-4.09-1.35M8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2m6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2"
        fill="currentColor"
      />
    </BaseIcon>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.5 8.5 0 0 1-1.88.13 8.4 8.4 0 0 1-5.91-2.82 8.07 8.07 0 0 1-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.32 10.32 0 0 0-6.32 10.21 10.48 10.48 0 0 0 7.04 8.99 10 10 0 0 0 2.89.55c.16.01.32.02.48.02a10.5 10.5 0 0 0 8.47-4.27c.67-.93.49-1.519.32-1.79"
        fill="currentColor"
      />
    </BaseIcon>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M19 12a7 7 0 1 1-7-7 7 7 0 0 1 7 7m-7 10.96a.97.97 0 0 1-1-.96v-.08a1 1 0 0 1 2 0 1.04 1.04 0 0 1-1 1.04m7.14-2.82a1.02 1.02 0 0 1-.71-.29l-.13-.13a1 1 0 0 1 1.41-1.41l.13.13a1 1 0 0 1 0 1.41.98.98 0 0 1-.7.29m-14.28 0a1.02 1.02 0 0 1-.71-.29 1 1 0 0 1 0-1.41l.13-.13a1 1 0 0 1 1.41 1.41l-.13.13a1 1 0 0 1-.7.29M22 13h-.08a1 1 0 0 1 0-2 1.04 1.04 0 0 1 1.04 1 .97.97 0 0 1-.96 1M2.08 13H2a1 1 0 0 1 0-2 1.04 1.04 0 0 1 1.04 1 .97.97 0 0 1-.96 1m16.93-7.01a1.02 1.02 0 0 1-.71-.29 1 1 0 0 1 0-1.41l.13-.13a1 1 0 0 1 1.41 1.41l-.13.13a.98.98 0 0 1-.7.29m-14.02 0a1.02 1.02 0 0 1-.71-.29l-.13-.14a1 1 0 0 1 1.41-1.41l.13.13a1 1 0 0 1 0 1.41.97.97 0 0 1-.7.3M12 3.04a.97.97 0 0 1-1-.96V2a1 1 0 0 1 2 0 1.04 1.04 0 0 1-1 1.04"
        fill="currentColor"
      />
    </BaseIcon>
  );
}

//</editor-fold>

/**
 * Map of icon names to their respective SVG components.
 * <p>
 * This map is used by the {@link Icon} component to render the SVG icon based
 * on the name.
 * </p>
 * <p>Icons:</p>
 * <ul>
 *   <li>{@link HomeIcon} - `home`</li>
 *   <li>{@link AboutIcon} - `about`</li>
 *   <li>{@link WorkIcon} - `work`</li>
 *   <li>{@link GalleryIcon} - `gallery`</li>
 *   <li>{@link MailIcon} - `mail`</li>
 *   <li>{@link MinersStudiosIcon} - `minersstudios`</li>
 *   <li>{@link GitHubIcon} - `github`</li>
 *   <li>{@link TelegramIcon} - `telegram`</li>
 *   <li>{@link YouTubeIcon} - `youtube`</li>
 *   <li>{@link TwitchIcon} - `twitch`</li>
 *   <li>{@link TikTokIcon} - `tiktok`</li>
 *   <li>{@link XIcon} - `x`</li>
 *   <li>{@link RedditIcon} - `reddit`</li>
 *   <li>{@link LinkedInIcon} - `linkedin`</li>
 *   <li>{@link MediumIcon} - `medium`</li>
 *   <li>{@link NPMIcon} - `npm`</li>
 *   <li>{@link SpotifyIcon} - `spotify`</li>
 *   <li>{@link WakaTimeIcon} - `wakatime`</li>
 *   <li>{@link SteamIcon} - `steam`</li>
 *   <li>{@link PatreonIcon} - `patreon`</li>
 *   <li>{@link StreamlabsIcon} - `streamlabs`</li>
 *   <li>{@link DonatelloIcon} - `donatello`</li>
 *   <li>{@link DiscordIcon} - `discord`</li>
 *   <li>{@link MoonIcon} - `moon`</li>
 *   <li>{@link SunIcon} - `sun`</li>
 * </ul>
 */
export const iconMap = new Map<IconId, (props: IconProps) => ReactElement>([
  ["home", HomeIcon],
  ["about", AboutIcon],
  ["work", WorkIcon],
  ["gallery", GalleryIcon],
  ["mail", MailIcon],
  ["minersstudios", MinersStudiosIcon],
  ["github", GitHubIcon],
  ["telegram", TelegramIcon],
  ["youtube", YouTubeIcon],
  ["twitch", TwitchIcon],
  ["tiktok", TikTokIcon],
  ["x", XIcon],
  ["reddit", RedditIcon],
  ["linkedin", LinkedInIcon],
  ["medium", MediumIcon],
  ["npm", NPMIcon],
  ["spotify", SpotifyIcon],
  ["wakatime", WakaTimeIcon],
  ["steam", SteamIcon],
  ["patreon", PatreonIcon],
  ["streamlabs", StreamlabsIcon],
  ["donatello", DonatelloIcon],
  ["discord", DiscordIcon],
  ["moon", MoonIcon],
  ["sun", SunIcon],
]);

/**
 * Base icon component to render SVG icons.
 *
 * @param size     Icon size, sets both width and height (default: 24)
 * @param width    Icon width (default: size)
 * @param height   Icon height (default: size)
 * @param children Icon SVG path
 * @param props    Additional svg props
 * @constructor
 */
export function BaseIcon({
  size = 24,
  width,
  height,
  children,
  ...props
}: IconProps): ReactElement {
  return (
    <svg
      height={height || size}
      viewBox={props.viewBox || "0 0 24 24"}
      width={width || size}
      {...props}
    >
      {children}
    </svg>
  );
}

/**
 * Icon component to render SVG icons.
 * <p>
 * This component uses the {@link iconMap} to render the SVG icon based on the
 * name.
 * If the icon name is not found in the map, it will render an empty div.
 * </p>
 *
 * @param id     Icon id, to be used as a key in the {@link iconMap}
 * @param size   Icon size (default: 24)
 * @param width  Icon width
 * @param height Icon height
 * @param props  Additional props
 * @returns Icon component
 * @constructor
 */
export function Icon({
  id,
  size = 24,
  width,
  height,
  ...props
}: IconProps & { id: IconId }): ReactElement {
  const IconComponent = iconMap.get(id);

  return IconComponent ? (
    <IconComponent height={height} size={size} width={width} {...props} />
  ) : (
    <div />
  );
}
