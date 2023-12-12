import React, { useEffect } from 'react'

export default function ChristmasTreeIcon() {

    return (
        <>
            <svg className="mainSVG" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 600">
                <defs>
                    <circle id="circ" className="particle" cx={0} cy={0} r={1} />
                    <polygon id="star" className="particle" points="4.55,0 5.95,2.85 9.1,3.3 6.82,5.52 7.36,8.65 4.55,7.17 1.74,8.65 2.27,5.52 0,3.3 3.14,2.85 " />
                    <polygon id="cross" className="particle" points="4,3.5 2.5,2 4,0.5 3.5,0 2,1.5 0.5,0 0,0.5 1.5,2 0,3.5 0.5,4 2,2.5 3.5,4 " />
                    <path id="heart" className="particle" d="M2.9,0C2.53,0,2.2,0.18,2,0.47C1.8,0.18,1.47,0,1.1,0C0.49,0,0,0.49,0,1.1
	C0,2.6,1.56,4,2,4s2-1.4,2-2.9C4,0.49,3.51,0,2.9,0z" />
                    <radialGradient id="grad" cx={3} cy={3} r={6} gradientUnits="userSpaceOnUse">
                        <stop offset={0} style={{ stopColor: 'red' }} />
                        <stop offset="0.4" style={{ stopColor: '#334673' }} />
                        <stop offset="0.6" style={{ stopColor: '#EDDDC4' }} />
                        <stop offset="0.9" style={{ stopColor: '#FEE8C7' }} />
                        <stop offset={1} style={{ stopColor: 'red' }} />
                    </radialGradient>
                    <radialGradient id="dotGrad" cx={0} cy={0} r={50} gradientUnits="userSpaceOnUse">
                        <stop offset={0} style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
                        <stop offset="0.1" style={{ stopColor: '#0867C7', stopOpacity: '0.6' }} />
                        <stop offset={1} style={{ stopColor: '#081029', stopOpacity: 0 }} />
                    </radialGradient>
                    <mask id="treePathMask">
                        <path className="treePathMask" fill="none" strokeWidth={18} stroke="#FFF" d="M252.9,447.9c0,0-30.8-21.6,33.9-44.7c64.7-23.1,46.2-37,33.9-41.6
    c-12.3-4.6-59.3-11.6-42.4-28.5s114-52.4,81.7-66.2c-32.4-13.9-58.5-10.8-35.4-29.3s66.2-101.7,70.9-115.6
    c4.4-13.2,16.9-18.5,24.7,0c7.7,18.5,44.7,100.1,67.8,115.6c23.1,15.4-10.8,21.6-26.2,24.7c-15.4,3.1-20,33.9,33.9,49.3
    c53.9,15.4,47.8,40.1,27.7,44.7c-20,4.6-63.2,4.6-27.7,32.4s98.6,21.6,61.6,60.1" />
                    </mask>
                    <mask id="treeBottomMask">
                        <path className="treeBottomMask" stroke="#FFF" strokeWidth={8} d="M207.5,484.1c0,0,58.5-43.1,211.1-3.1s191-16.9,191-16.9" />
                    </mask>
                    <mask id="treePotMask">
                        <path className="treePotMask" stroke="#FFF" strokeWidth={8} d="M374.3,502.5c0,0-4.6,20,7.7,29.3c12.3,9.2,40.1,7.7,50.8,0s10.8-23.1,10.8-29.3" />
                    </mask>
                    <filter id="glow" x="-150%" y="-150%" width="280%" height="280%">
                        <feOffset result="offOut" in="SourceGraphic" dx={0} dy={0} />
                        <feGaussianBlur in="offOut" stdDeviation={16} result="blur" />
                        <feComponentTransfer>
                            <feFuncR type="discrete" tableValues="0.8" />
                            <feFuncG type="discrete" tableValues="0.3" />
                            <feFuncB type="discrete" tableValues="0.2" />
                            {/*<feFuncA type="linear" slope="1" intercept="0" />*/}
                        </feComponentTransfer>
                        <feComposite in="SourceGraphic" operator="over" />
                    </filter>
                </defs>
                <g className="whole">
                    <g className="pContainer" />
                    <g className="tree" mask="url(#treePathMask)">
                        <path d="M252.95,447.85a20.43,20.43,0,0,1-5.64-6.24,14,14,0,0,1-1.91-8.22,16.93,16.93,0,0,1,3.06-8,33.16,33.16,0,0,1,5.79-6.28A74.78,74.78,0,0,1,268.54,410a163.48,163.48,0,0,1,15.52-6.84c10.54-3.93,21-8.07,30.72-13.46a80.83,80.83,0,0,0,7-4.37,37.51,37.51,0,0,0,6.13-5.24c1.75-1.92,3.14-4.18,3.25-6.35s-1.12-4.18-3-5.81a25,25,0,0,0-6.72-3.91,61.25,61.25,0,0,0-7.8-2.42c-5.41-1.4-10.91-2.72-16.38-4.32a84.17,84.17,0,0,1-16.2-6.19,28.26,28.26,0,0,1-3.86-2.5,15.06,15.06,0,0,1-3.44-3.63,9,9,0,0,1-1.51-5.47,10.22,10.22,0,0,1,.61-2.78,12.88,12.88,0,0,1,1.2-2.34,26.73,26.73,0,0,1,6.58-6.56c2.35-1.76,4.76-3.33,7.19-4.84,4.87-3,9.82-5.75,14.77-8.46,9.91-5.4,19.88-10.59,29.63-16.08,4.87-2.75,9.68-5.56,14.33-8.56A81.88,81.88,0,0,0,359.45,280a23,23,0,0,0,2.41-2.79,8.36,8.36,0,0,0,1.35-2.65,2.13,2.13,0,0,0-.17-1.7,5.53,5.53,0,0,0-1.88-1.77,13.15,13.15,0,0,0-1.49-.83c-.52-.26-1.1-.49-1.76-.77-1.27-.53-2.55-1-3.83-1.53q-3.86-1.48-7.8-2.77c-5.26-1.74-10.6-3.23-16-4.79-2.72-.79-5.47-1.58-8.29-2.61a31.74,31.74,0,0,1-4.33-1.92,14.39,14.39,0,0,1-2.29-1.53,8.74,8.74,0,0,1-2.22-2.66,7.2,7.2,0,0,1-.78-4,9.09,9.09,0,0,1,1-3.24,18.93,18.93,0,0,1,3-4.21,44.88,44.88,0,0,1,3.29-3.19c.56-.5,1.12-1,1.68-1.45l1.61-1.33a84,84,0,0,0,10.88-11.88,326.2,326.2,0,0,0,18.79-27.53c5.88-9.5,11.48-19.19,16.89-29S380.1,146.16,385,136.13c1.22-2.51,2.42-5,3.57-7.54s2.29-5.09,3.14-7.45l.36-1c.14-.38.26-.75.42-1.12.29-.75.64-1.48,1-2.21a25.51,25.51,0,0,1,2.65-4.21,19.15,19.15,0,0,1,3.76-3.69,13.74,13.74,0,0,1,5.24-2.42,12.11,12.11,0,0,1,6.12.25,14.59,14.59,0,0,1,5,2.79,20.59,20.59,0,0,1,3.47,3.79,30.33,30.33,0,0,1,2.5,4.1c.35.7.7,1.39,1,2.1l.46,1.05.4,1,1.64,3.84,3.39,7.67q6.88,15.32,14.36,30.37c5,10,10.18,19.94,15.69,29.65a274.94,274.94,0,0,0,17.9,28A73.36,73.36,0,0,0,487.74,233c.49.4,1,.8,1.48,1.15l1.7,1.19a35,35,0,0,1,3.66,3,17.84,17.84,0,0,1,3.32,4.08,10.83,10.83,0,0,1,1.14,2.94,8.54,8.54,0,0,1,0,3.54,10.27,10.27,0,0,1-3.22,5.39,20.71,20.71,0,0,1-4.15,2.91,49,49,0,0,1-8.4,3.46,154,154,0,0,1-16.77,4.09l-4.15.81a9.18,9.18,0,0,0-2.87,1.08,9.51,9.51,0,0,0-4,4.7,12.55,12.55,0,0,0-.67,6.58,19.5,19.5,0,0,0,2.46,6.74A37.19,37.19,0,0,0,468,295.75a75,75,0,0,0,14.14,7.86,129.67,129.67,0,0,0,15.58,5.49A141.4,141.4,0,0,1,513.88,315a75,75,0,0,1,15.19,8.65,37.29,37.29,0,0,1,6.55,6.24,21.05,21.05,0,0,1,4.31,8.49,14.43,14.43,0,0,1-1.24,9.88,18.08,18.08,0,0,1-6.66,6.94,26.74,26.74,0,0,1-8.56,3.33c-2.84.61-5.65,1.06-8.44,1.49-5.58.86-11.13,1.61-16.52,2.77a53.48,53.48,0,0,0-7.81,2.22c-2.43.94-4.81,2.22-6,3.93a4.34,4.34,0,0,0-.77,2.82,8.45,8.45,0,0,0,1,3.29,28,28,0,0,0,4.82,6.25,80.74,80.74,0,0,0,12.81,10.4c9.29,6,19.72,10.29,30.24,14.17,5.27,1.95,10.59,3.79,15.85,5.86,2.63,1,5.24,2.14,7.79,3.39a37.94,37.94,0,0,1,7.28,4.51,11.9,11.9,0,0,1,3.63,15.57,34.68,34.68,0,0,1-4.53,7.16,77.45,77.45,0,0,1-5.64,6.29,77.31,77.31,0,0,0,5.41-6.46,34.27,34.27,0,0,0,4.22-7.21,12.64,12.64,0,0,0,.88-8,12.44,12.44,0,0,0-4.71-6.43,37.71,37.71,0,0,0-7.15-4.16c-2.53-1.16-5.13-2.18-7.76-3.14-5.26-1.91-10.62-3.62-16-5.44-10.65-3.63-21.34-7.64-31.11-13.64a83.84,83.84,0,0,1-13.61-10.49,31.27,31.27,0,0,1-5.6-6.94,12,12,0,0,1-1.55-4.68,8.17,8.17,0,0,1,.19-2.7,8.56,8.56,0,0,1,1.09-2.5,12.1,12.1,0,0,1,3.6-3.44,24.27,24.27,0,0,1,4.08-2.08,57.3,57.3,0,0,1,8.36-2.56c5.59-1.31,11.19-2.17,16.71-3.12,2.76-.48,5.5-1,8.15-1.59a22.1,22.1,0,0,0,7-2.87,13.3,13.3,0,0,0,4.82-5.15,9.42,9.42,0,0,0,.69-6.53,16,16,0,0,0-3.42-6.33,33.25,33.25,0,0,0-5.73-5.27,69.74,69.74,0,0,0-14.19-7.8,135.81,135.81,0,0,0-15.61-5.42,135.53,135.53,0,0,1-16.3-5.51,81,81,0,0,1-15.41-8.31,43.39,43.39,0,0,1-12.6-13,25.53,25.53,0,0,1-3.34-9,19.13,19.13,0,0,1,1-10,16.17,16.17,0,0,1,6.69-8,15.88,15.88,0,0,1,5-1.93l4.13-.84a147.75,147.75,0,0,0,16-4,42.41,42.41,0,0,0,7.17-3,14,14,0,0,0,2.74-1.92,3.42,3.42,0,0,0,1.12-1.68,2.41,2.41,0,0,0-.43-1.61,11.07,11.07,0,0,0-2-2.4,28,28,0,0,0-2.92-2.31l-1.76-1.22c-.65-.46-1.26-.94-1.86-1.43a59,59,0,0,1-6.43-6.27c-2-2.19-3.79-4.44-5.54-6.74a267,267,0,0,1-18.55-28.74c-5.63-9.85-10.89-19.86-16-30s-9.91-20.31-14.57-30.61l-3.45-7.76L417,124.48l-.42-1-.39-.88c-.25-.59-.54-1.15-.82-1.71a22.74,22.74,0,0,0-1.89-3.09,13,13,0,0,0-2.2-2.42,7,7,0,0,0-2.31-1.33,4.49,4.49,0,0,0-2.22-.09,8.55,8.55,0,0,0-4.59,3.32,17.85,17.85,0,0,0-1.84,2.92c-.26.54-.51,1.07-.73,1.64-.12.27-.22.56-.32.85l-.35,1c-1.06,2.93-2.23,5.47-3.42,8.1s-2.42,5.16-3.67,7.7c-5,10.18-10.29,20.16-15.77,30.05s-11.17,19.66-17.16,29.28a310.2,310.2,0,0,1-19.39,28.11,90.46,90.46,0,0,1-12,12.85l-1.65,1.35c-.52.43-1,.85-1.53,1.29a38,38,0,0,0-2.79,2.65,12.42,12.42,0,0,0-1.94,2.57,2.33,2.33,0,0,0-.28.76c0,.11,0,0,0,.09a4.57,4.57,0,0,0,1.7,1.35,25.15,25.15,0,0,0,3.36,1.51c2.46.92,5.11,1.72,7.79,2.52,5.36,1.58,10.84,3.16,16.25,5q4.06,1.37,8.08,2.94c1.34.53,2.67,1.07,4,1.63.64.27,1.36.57,2.1.94a19.66,19.66,0,0,1,2.18,1.24,11.85,11.85,0,0,1,4,4.13,8.64,8.64,0,0,1,1,3.24,9.11,9.11,0,0,1-.27,3.23,14.48,14.48,0,0,1-2.42,4.85,29.32,29.32,0,0,1-3.14,3.56,87.46,87.46,0,0,1-14,10.47c-4.85,3-9.79,5.84-14.76,8.55-9.94,5.42-20,10.49-29.91,15.72-5,2.62-9.88,5.28-14.63,8.12-2.37,1.42-4.7,2.89-6.88,4.46a22.06,22.06,0,0,0-5.45,5.14,8,8,0,0,0-.76,1.39,5.36,5.36,0,0,0-.33,1.32,4.1,4.1,0,0,0,.69,2.53,15.62,15.62,0,0,0,5.49,4.62A80.14,80.14,0,0,0,298.56,353c5.31,1.66,10.73,3.06,16.18,4.58a64.81,64.81,0,0,1,8.26,2.74,27.74,27.74,0,0,1,7.69,4.74,13.65,13.65,0,0,1,3,3.81,9.27,9.27,0,0,1,1,5,11.14,11.14,0,0,1-1.54,4.7,19.09,19.09,0,0,1-2.8,3.67,40.6,40.6,0,0,1-6.81,5.54,83.78,83.78,0,0,1-7.41,4.35c-10.11,5.26-20.76,9.16-31.39,12.82a161.69,161.69,0,0,0-15.52,6.37A74.57,74.57,0,0,0,255,420a32.17,32.17,0,0,0-5.82,5.89,16.21,16.21,0,0,0-3.19,7.52,13.61,13.61,0,0,0,1.59,8A20.29,20.29,0,0,0,252.95,447.85Z" fill="#cb9866" />
                        <path d="M207.5,484.06c7.05-5.11,15.14-8.66,23.34-11.63a177.13,177.13,0,0,1,25.29-6.88,263.65,263.65,0,0,1,52.22-4.49h3.28l3.28.09,6.56.19,6.55.39c2.18.13,4.37.26,6.54.48,4.35.39,8.71.74,13,1.28l6.51.75,6.49.91c17.3,2.5,34.41,6,51.36,10.19l12.62,3.2c4.18,1,8.34,2.18,12.55,3.06,8.38,2,16.82,3.63,25.29,5.13a353.5,353.5,0,0,0,51.17,5.47c17.11.32,34.36-.66,51-4.7a118.55,118.55,0,0,0,24.21-8.47,84.82,84.82,0,0,0,11.11-6.49,47.55,47.55,0,0,0,9.69-8.53,48.1,48.1,0,0,1-9,9.45,85.1,85.1,0,0,1-10.81,7.45,116.56,116.56,0,0,1-24.23,10.24,165.66,165.66,0,0,1-25.79,5.35,232.1,232.1,0,0,1-26.27,1.71c-8.77,0-17.55-.24-26.26-1.09-2.18-.2-4.37-.35-6.54-.6l-6.52-.78c-4.36-.46-8.67-1.19-13-1.82-8.64-1.37-17.22-3.09-25.74-5-4.28-.87-8.5-2-12.75-3l-12.62-3.11q-25.06-6.37-50.58-10.47a426.37,426.37,0,0,0-51.3-5.3c-8.59-.42-17.19-.29-25.78,0a240.1,240.1,0,0,0-25.68,2.24,186.57,186.57,0,0,0-25.27,5.19c-4.15,1.16-8.26,2.49-12.28,4.05-2,.79-4,1.6-6,2.52A50.82,50.82,0,0,0,207.5,484.06Z" fill="#cb9866" />
                        <path d="M374.32,502.55a48.15,48.15,0,0,0,1.24,14.35c1.15,4.52,3.29,8.64,6.49,11.35a18.5,18.5,0,0,0,5.51,3.14,39.06,39.06,0,0,0,6.41,1.82,65.78,65.78,0,0,0,13.68,1.12,72.9,72.9,0,0,0,13.72-1.44,44.51,44.51,0,0,0,6.46-1.85,17.75,17.75,0,0,0,5.51-3.15,25.45,25.45,0,0,0,7.24-11.17,52,52,0,0,0,1.9-6.91c.48-2.37.83-4.8,1.18-7.25a55.16,55.16,0,0,1,.64,7.42,40.11,40.11,0,0,1-.52,7.56,31.23,31.23,0,0,1-2.19,7.5,24.37,24.37,0,0,1-4.46,6.79,25.16,25.16,0,0,1-6.61,5,39.72,39.72,0,0,1-7.4,3A58.55,58.55,0,0,1,407.75,542a55,55,0,0,1-15.47-1.9,36.65,36.65,0,0,1-7.46-3,25.3,25.3,0,0,1-6.6-5,19.63,19.63,0,0,1-2.5-3.34,21.72,21.72,0,0,1-1.79-3.67,27.66,27.66,0,0,1-1.65-7.7,38.16,38.16,0,0,1,2-14.87Z" fill="#cb9866" />
                    </g>
                    <path className="treeBottomPath" stroke="none" fill="none" strokeWidth={8} d="M207.5,484.1c0,0,58.5-43.1,211.1-3.1s191-16.9,191-16.9" />
                    <path className="treePath" fill="none" stroke="none" strokeMiterlimit={10} d="M252.95,447.85s-30.81-21.57,33.89-44.68,46.22-37,33.89-41.6-59.32-11.56-42.37-28.5,114-52.38,81.66-66.25S301.48,256,324.59,237.55,390.84,135.87,395.46,122c4.41-13.24,16.95-18.49,24.65,0s44.68,100.14,67.79,115.55-10.78,21.57-26.19,24.65-20,33.89,33.89,49.3,47.76,40.06,27.73,44.68-63.17,4.62-27.73,32.35,98.6,21.57,61.63,60.09" />
                    <path className="treeBottom" mask="url(#treeBottomMask)" d="M207.5,484.06c7.05-5.11,15.14-8.66,23.34-11.63a177.13,177.13,0,0,1,25.29-6.88,263.65,263.65,0,0,1,52.22-4.49h3.28l3.28.09,6.56.19,6.55.39c2.18.13,4.37.26,6.54.48,4.35.39,8.71.74,13,1.28l6.51.75,6.49.91c17.3,2.5,34.41,6,51.36,10.19l12.62,3.2c4.18,1,8.34,2.18,12.55,3.06,8.38,2,16.82,3.63,25.29,5.13a353.5,353.5,0,0,0,51.17,5.47c17.11.32,34.36-.66,51-4.7a118.55,118.55,0,0,0,24.21-8.47,84.82,84.82,0,0,0,11.11-6.49,47.55,47.55,0,0,0,9.69-8.53,48.1,48.1,0,0,1-9,9.45,85.1,85.1,0,0,1-10.81,7.45,116.56,116.56,0,0,1-24.23,10.24,165.66,165.66,0,0,1-25.79,5.35,232.1,232.1,0,0,1-26.27,1.71c-8.77,0-17.55-.24-26.26-1.09-2.18-.2-4.37-.35-6.54-.6l-6.52-.78c-4.36-.46-8.67-1.19-13-1.82-8.64-1.37-17.22-3.09-25.74-5-4.28-.87-8.5-2-12.75-3l-12.62-3.11q-25.06-6.37-50.58-10.47a426.37,426.37,0,0,0-51.3-5.3c-8.59-.42-17.19-.29-25.78,0a240.1,240.1,0,0,0-25.68,2.24,186.57,186.57,0,0,0-25.27,5.19c-4.15,1.16-8.26,2.49-12.28,4.05-2,.79-4,1.6-6,2.52A50.82,50.82,0,0,0,207.5,484.06Z" fill="#cb9866" />
                    <path className="treePot" mask="url(#treePotMask)" d="M374.32,502.55a48.15,48.15,0,0,0,1.24,14.35c1.15,4.52,3.29,8.64,6.49,11.35a18.5,18.5,0,0,0,5.51,3.14,39.06,39.06,0,0,0,6.41,1.82,65.78,65.78,0,0,0,13.68,1.12,72.9,72.9,0,0,0,13.72-1.44,44.51,44.51,0,0,0,6.46-1.85,17.75,17.75,0,0,0,5.51-3.15,25.45,25.45,0,0,0,7.24-11.17,52,52,0,0,0,1.9-6.91c.48-2.37.83-4.8,1.18-7.25a55.16,55.16,0,0,1,.64,7.42,40.11,40.11,0,0,1-.52,7.56,31.23,31.23,0,0,1-2.19,7.5,24.37,24.37,0,0,1-4.46,6.79,25.16,25.16,0,0,1-6.61,5,39.72,39.72,0,0,1-7.4,3A58.55,58.55,0,0,1,407.75,542a55,55,0,0,1-15.47-1.9,36.65,36.65,0,0,1-7.46-3,25.3,25.3,0,0,1-6.6-5,19.63,19.63,0,0,1-2.5-3.34,21.72,21.72,0,0,1-1.79-3.67,27.66,27.66,0,0,1-1.65-7.7,38.16,38.16,0,0,1,2-14.87Z" fill="#cb9866" />
                    <g className="treeStar">
                        <path className="treeStarOutline" opacity={0} d="M421,53.27c5,.83,10.08,1.52,15.15,2.13l3.8.45,1.9.21c.33,0,.6.06,1,.12a2.41,2.41,0,0,1,1.27.66,2.52,2.52,0,0,1,.56,2.76,3.42,3.42,0,0,1-.78,1.07l-.66.69-2.65,2.77c-1.78,1.83-3.54,3.68-5.35,5.48l-2.7,2.71L429.81,75l-.69.67-.34.33,0,0h0a.14.14,0,0,0,0-.08s0-.07,0,0l0,.24.07.47.57,3.78c.4,2.52.71,5,1.06,7.57l.94,7.59.22,1.9c0,.06,0,.19,0,.34a2.21,2.21,0,0,1,0,.43,2.72,2.72,0,0,1-.21.84,2.85,2.85,0,0,1-2.65,1.75,2.57,2.57,0,0,1-.82-.14,3.12,3.12,0,0,1-.65-.3l-1.64-1-6.58-3.91-6.63-3.81-3.34-1.86-.42-.23-.21-.12-.14-.07a1,1,0,0,0-.59,0,1.15,1.15,0,0,0-.31.12l-.43.22-.85.44c-2.27,1.17-4.54,2.31-6.79,3.52s-4.51,2.38-6.74,3.61l-3.36,1.83-.84.46a3.07,3.07,0,0,1-1.28.44,2.68,2.68,0,0,1-2.84-3l.15-1,.29-1.89.57-3.78,1.18-7.56,1.24-7.52a.13.13,0,0,0,0,.08l0,0-.1-.09-.17-.17-1.37-1.34-2.73-2.68-10.93-10.7-.34-.33a4,4,0,0,1-.64-.84,3.63,3.63,0,0,1-.43-2.12,3.68,3.68,0,0,1,2.64-3.17l.52-.11.25,0,.47-.06.95-.12,1.9-.25,7.58-1,7.6-.9,1.9-.23.95-.11c.24,0,.11,0,.09,0l-.09.05-.07.08,0,0,.09-.16.46-.84.91-1.68c2.41-4.5,4.95-8.92,7.51-13.34l1-1.66.48-.83.24-.41.13-.23a3.49,3.49,0,0,1,.22-.33,2.66,2.66,0,0,1,2.83-.9,2.52,2.52,0,0,1,1.26.84,2.85,2.85,0,0,1,.37.62l.18.44q1.45,3.54,3,7.06c1,2.36,2,4.68,3.06,7,.51,1.17,1.06,2.32,1.59,3.48l.8,1.74a2.12,2.12,0,0,0,.45.75A1.42,1.42,0,0,0,421,53.27Zm-.06.39a1.82,1.82,0,0,1-1-.46,2.52,2.52,0,0,1-.56-.86l-.84-1.72c-.56-1.14-1.11-2.3-1.69-3.43-1.17-2.27-2.29-4.56-3.5-6.81s-2.39-4.51-3.6-6.76l-.23-.42a.8.8,0,0,0-.14-.18.58.58,0,0,0-.33-.15.56.56,0,0,0-.57.28L407,36.48c-2.09,4.66-4.2,9.31-6.45,13.88l-.83,1.72-.42.86-.13.27a3.57,3.57,0,0,1-2,1.67,4.26,4.26,0,0,1-.84.18l-.95.13-1.89.27L386,56.53l-7.58,1-3.49.44a.45.45,0,0,0,.34-.4.51.51,0,0,0-.07-.28s-.06-.08-.07-.08l.33.34,10.65,11,2.66,2.75,1.33,1.37.4.42a3.41,3.41,0,0,1,.53.84,3.36,3.36,0,0,1,.24,1.95c-.53,2.56-1,5-1.57,7.52L388,90.85l-.83,3.73-.42,1.87-.2.9a.5.5,0,0,0,0,.3.58.58,0,0,0,.52.37,6.28,6.28,0,0,0,1.38-.58l3.46-1.62q3.47-1.61,6.9-3.3c2.3-1.1,4.57-2.26,6.85-3.39l.86-.43.43-.21a2.55,2.55,0,0,1,.57-.22,2.21,2.21,0,0,1,1.29.08l.29.13.21.11.42.23,3.37,1.81,6.8,3.51,6.85,3.41,1.71.85c.19.09.15.07.22.08a.25.25,0,0,0,.12,0,.42.42,0,0,0,.21-.1.33.33,0,0,0,.1-.19.2.2,0,0,0,0-.09.1.1,0,0,0,0,0l0-.13L428.74,96l-1.42-7.52c-.43-2.51-.9-5-1.29-7.54l-.6-3.78-.08-.47,0-.24a3.75,3.75,0,0,1,0-.45,3.37,3.37,0,0,1,.52-1.9,3.33,3.33,0,0,1,.3-.4,3.73,3.73,0,0,1,.3-.3l.35-.32.7-.65,2.81-2.59,2.86-2.54c1.9-1.71,3.84-3.36,5.77-5l2.91-2.49a12.91,12.91,0,0,0,1.15-1,.7.7,0,0,0-.06-.79.73.73,0,0,0-.37-.26c-.23-.06-.6-.13-.89-.2l-1.87-.4L436,56.39C431,55.39,426,54.45,420.95,53.66Z" fill="#FFFCF9" />
                        <path d="M408.12,83.45l-17.78,8.94,3.72-19.55-14-14.15,19.74-2.5,9.13-17.68,8.48,18L437,59.73l-14.5,13.63,3,19.67Z" fill="#C89568" />
                    </g>
                    <circle className="sparkle" fill="url(#dotGrad)" cx={0} cy={0} r={50} />
                </g>
            </svg>
        </>
    )
}
