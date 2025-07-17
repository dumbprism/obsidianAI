import { App,Modal, Plugin } from "obsidian";
export class AIChatModal extends Modal{
    plugin: typeof Plugin;

    constructor(app:App,plugin:Plugin){
        super(app)
        this.plugin = Plugin
    }

    onOpen(): void {
        const {contentEl,titleEl} = this

        titleEl.setText("Obsidian AI")
        titleEl.style.color = "#6f00afff ";
        contentEl.setText("How can I help today ?")
        contentEl.style.padding = "5px"
       

        const divEl = contentEl.createEl('div',{cls:"input-class"});
        
        const inputEl = divEl.createEl('input',{
            type:'text',
            placeholder: 'ask me something...'
        });

        divEl.append(inputEl)
        divEl.style.padding = "5px";
        divEl.style.width = "100px";
        const buttonEl = contentEl.createEl('button',{
            text : 'send',
            cls : 'send-button'
        })
        buttonEl.style.width = "10rem";

        buttonEl.onclick = () => {
            const userAsked = inputEl.value

            console.log("user Asked : " + userAsked)

            inputEl.value = ''
        }

    }

    onClose(): void {
        const {titleEl} = this
        titleEl.empty()
        const {contentEl} = this
        contentEl.empty()
    }
}