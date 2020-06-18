class ChatPage {

    getSubjectText(deviceBrowser) {
        deviceBrowser.$('#videoconference_page .subject .subject-text').waitForDisplayed()
        return deviceBrowser.$('#videoconference_page .subject .subject-text').getText()
    }

    get launchInWebButton() {
        return $('//*[@id="react"]/div[1]/div/div[2]/a[3]/button') 
    }

    get moreActionsButton() {
        return $('.toolbox-button-wth-dialog .toolbox-icon .jitsi-icon svg')
    }

    get openChatOption() {
        return $('//*[@id="new-toolbox"]/div[2]/div[3]/div/div/div[2]/div/div/ul/li[3]')
    }

    get nickInput(){
        return $('#nickinput')
    }

    get userMessage(){
        return $('#usermsg')
    }

    userMessageByDevice(deviceBrowser){
        return deviceBrowser.$('#usermsg')
    }

    get smileInput(){
        return $('.smiley-input')
    }

    hideKeyBoard(){
        if(driver.isKeyboardShown) {
            driver.hideKeyboard();
        }
    }

    sendMessage(deviceBrowser, message){
        deviceBrowser.pause(1000)
        this.typeAMessage(deviceBrowser, message)
        deviceBrowser.pause(1000)
        this.pressEnterOnInputMessage(deviceBrowser)
        deviceBrowser.pause(1000)
    }

    typeAMessage(deviceBrowser, message){
        deviceBrowser.$('#usermsg').setValue(message)//+'\n')
    }

    pressEnterOnInputMessage(deviceBrowser){
        deviceBrowser.$('#usermsg').setValue('\n')
    }

    sendIcon(deviceBrowser, iconIndex){
        deviceBrowser.pause(1000)
        deviceBrowser.$('#smileys').click(); 
        deviceBrowser.$('.jitsi-icon.settings-button-small-icon').click()            
        deviceBrowser.pause(1000)
        deviceBrowser.$('#smiley'+iconIndex).click()
        deviceBrowser.pause(1000)
        this.pressEnterOnInputMessage(deviceBrowser)
    }

    closeChat(deviceBrowser) {
        deviceBrowser.$('.chat-close')
    }

    leaveMeeting(deviceBrowser){
        deviceBrowser.$('//*[@id="new-toolbox"]/div[2]/div[2]/div[2]')
    }

    nicknameInputText(deviceBrowser){
        return deviceBrowser.$('#nickinput').getValue()
    }

    typeNickname(deviceBrowser, nickname){
        deviceBrowser.$('#nickinput').waitForDisplayed()
        deviceBrowser.$('#nickinput').setValue(nickname+'\n')
    }

    menuOption(option){
        this.moreActionsButton.waitForDisplayed()
        this.moreActionsButton.click()
        switch(option){
            case 'openChat':
                this.openChatOption.waitForDisplayed()
                this.openChatOption.click()
              break;
            case 'raiseYourHand':
                //
              break;
            case 'invitePeople':
                //
              break;
            default:
                throw "Error: wrong option to select from menu More actions, please select openChat"; 
        }
    }

    alertOption(option){
        browser.pause(2000)
        switch(option) {
            case 'allow':                
                browser.execute('mobile:acceptAlert')
              break;
            case 'block':
                browser.execute('mobile:dismissAlert')
              break;
            default:
                throw "Error: wrong option for window alert, please select either block or allow"; 
        }  
    }

}
module.exports = new ChatPage()