import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import './Compilerstyle.css';
import profile from './pics/profile.png';
import settings from './pics/settings.png';
import search from './pics/search.png';
import info from './pics/info.png';
import delet from './pics/delete.png';
import copy from './pics/copy.png';
import terminal from './pics/terminal.png';
import download from './pics/download.png';
import newlogo3 from './pics/newlogo3.png';
import finale from './pics/finale.png';
import refresh from './pics/refresh.png';
import format from './pics/format.png';


const codeSnippets = {
    'Javascript': `// Javascript
console.log("Hello, World!");`,

    'C++': `// C++
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,


    'C': `// C
#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}`,
    'Java': `// Java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
    'Python': `# Python
print("Hello, World!")
`
};


const Compiler = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('Javascript');
    const [code, setCode] = useState(codeSnippets['Javascript']);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    const languageMap = {
        JavaScript: 'javascript',
        'C++': 'cpp',
        C: 'c',
        Java: 'java',
        Python: 'python',
    };


    const handleLanguageChange = (event) => {
        const newLanguage = event.target.value;
        setSelectedLanguage(newLanguage);
        setCode(codeSnippets[newLanguage]);
    };

    const handleEditorChange = (value) => {
        setCode(value);
    }

    const toggleProfileMenu = () => {
        setIsProfileMenuOpen(prev => !prev);
    };



    const handleEditorDidMount = (editor, monaco) => {
        monaco.editor.defineTheme('my-custom-theme', {
            base: 'vs-dark',
            inherit: true,
            rules: [],
            colors: {
                'editor.background': '#21252b',
                'editorGutter.background': '#21252b'
            }
        });
        monaco.editor.setTheme('my-custom-theme');
    };

    return (

        <div className="app-container">
            <header>
                <div className="left-header">
                    <span className="left">
                        <img className='imglogo-style' src={newlogo3} />&nbsp;
                        <img className='img-logo' src={finale} />
                    </span>
                </div>
                <div className="right-header">
                    {/* <button className="button-68" type="button">Home</button>&nbsp;&nbsp; */}

                    {/* <button className="button-68" type="button"></button> */}
                    <button className='button2'><img className='setting' src={settings} /></button>&nbsp;&nbsp;
                    <div className="profile-menu-container">
                        <button className='button2' onClick={toggleProfileMenu} title="Profile">
                            {/* Profile icon/placeholder */}
                            <img className='img1' src={profile} />

                        </button>
                        {isProfileMenuOpen && (
                            <div className="profile-dropdown-menu">
                                <button className="dropdown-item" >Home</button>
                                <button className="dropdown-item" >Profile</button>
                                <button className="dropdown-item" >Account Settings</button>
                                <button className="dropdown-item logout-link" >Logout</button>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <hr className="separator" />

            <main>
                <section className="right-sidebar">
                    <br />
                    <div className="rightheading2">
                        <b>FILES</b>
                    </div>
                    <div className="rightheading">
                        <b>Login to view your Files</b><br /><br />
                    </div>
                    {/* <div className="right-header1"> */}
                    <a href="/loginpage">
                        <button className="button-2" type="button">Login</button>
                    </a>
                    {/* <a href="/style">
                            <button className="server-button" type="button">Login</button>
                        </a> */}
                    {/* </div> */}
                </section>
                <section>
                    <div className="container"></div>
                </section>

                <section className="main-content">
                    <div className="toolbar">
                        <div className="left-toolbar">
                            <div className="file-explorer-path">
                                <span className="path-item">Editor</span>
                            </div>
                        </div>
                        <div className="right-toolbar">
                            {/* <ButtonUtility size="xs" color="tertiary" tooltip="Copy" icon={Copy01} />
                            <ButtonUtility size="xs" color="tertiary" tooltip="Download" icon={DownloadCloud02} />
                            <ButtonUtility size="xs" color="tertiary" tooltip="Delete" icon={Trash01} />
                            <ButtonUtility size="xs" color="tertiary" tooltip="Edit" icon={Edit01} /> */}
                            <button><img className='copy' src={format} /></button>&nbsp;&nbsp;&nbsp;
                            <button><img className='copy' src={copy} /></button>&nbsp;&nbsp;
                            <button><img className='copy' src={refresh} /></button>&nbsp;&nbsp;
                            <select id="output-style" onChange={handleLanguageChange} value={selectedLanguage}>
                                <option>Javascript</option>
                                <option>C++</option>
                                <option>C</option>
                                <option>Java</option>
                                <option>Python</option>
                            </select>&nbsp;&nbsp;&nbsp;
                            {/* <button className="button-6" type="button">Debug</button>&nbsp;&nbsp; */}
                            <button className="button-6" type="button">Run</button>
                        </div>
                    </div>
                    <div className="code-editor-area">
                        <div className="code-editor">
                            <Editor

                                height="100%"
                                width="100%"
                                // language={selectedLanguage.toLowerCase()}
                                language={languageMap[selectedLanguage]}
                                defaultLanguage='javascript'
                                theme="vs-dark"
                                options={{fontSize:16}}
                                value={code}
                                onChange={handleEditorChange}
                                onMount={handleEditorDidMount}
                            />

                        </div>
                    </div>
                </section>

                <section>
                    <div className="container1"></div>
                </section>

                <section className="main-content">
                    <div className="toolbar">
                        <div className="left-toolbar1">
                            <div className="file-explorer-path">
                                <img className='terminal' src={terminal} />&nbsp;
                                <span className="path-item">Terminal</span>
                            </div>
                        </div>
                        <div className="right-toolbar1">
                            {/* <button><img className='delete' src={download} /></button>&nbsp;&nbsp; */}
                            <button><img className='delete' src={delet} /></button>&nbsp;&nbsp;
                            {/* <button className="button-6" type="button">Refresh</button> */}
                        </div>
                    </div>
                    <div className="code-editor-area">
                        <div className="code-editor">
                            <textarea placeholder="&nbsp;Output Here..."></textarea>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container"></div>
                </section>
            </main>
        </div>
    );
};

export default Compiler;
