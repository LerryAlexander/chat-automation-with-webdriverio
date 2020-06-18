chatPage = require('../../pages/chat.page')

describe("chat session with Jitsi meeting", function() {

    it('should open Jitsi meeting at https://meet.jit.si/webdriverIO-chat-automation', () => {
        browser.url('/webdriverIO-chat-automation')
        chatPage.launchInWebButton.click()
        chatPage.alertOption('block')
        chatPage.getSubjectText(deviceBrowser01).should.be.a('string').and.equals("Webdriver IO Chat Automation")
        chatPage.getSubjectText(deviceBrowser02).should.be.a('string').and.equals("Webdriver IO Chat Automation")
    })

    it('should open a chat session, set nickname for each user and validate that salute message is sent', () => {
        chatPage.menuOption('openChat')
        chatPage.typeNickname(deviceBrowser01, 'userA')
        chatPage.typeNickname(deviceBrowser02, 'userB')
        chatPage.smileInput.click(); browser.pause(1000); chatPage.smileInput.click();
        chatPage.typeAMessage(deviceBrowser01, 'Hello')
        chatPage.typeAMessage(deviceBrowser02, 'Hi')
        chatPage.userMessageByDevice(deviceBrowser01).getValue().should.be.a('string').and.equals('Hello') //userA types 'Hello'
        chatPage.userMessageByDevice(deviceBrowser02).getValue().should.be.a('string').and.equals('Hi') //userB types 'Hi'
        chatPage.pressEnterOnInputMessage(deviceBrowser01) //userA send the message
        chatPage.pressEnterOnInputMessage(deviceBrowser02) //userB send the message
        chatPage.userMessageByDevice(deviceBrowser01).getValue().should.be.equals('') //verify the message has been sent for userA
        chatPage.userMessageByDevice(deviceBrowser02).getValue().should.be.equals('') //verify the message has been sent for userA
        chatPage.hideKeyBoard()
        //browser.debug()
    })

    it('should start a conversation and then finish the session', () => {
        chatPage.sendMessage(deviceBrowser01, 'How are you?')
        chatPage.sendMessage(deviceBrowser02, 'I have been great, and you?')
        chatPage.sendMessage(deviceBrowser01, 'What is your name?')
        chatPage.sendMessage(deviceBrowser02, 'My name is userB, and what is yours?')
        chatPage.sendMessage(deviceBrowser01, 'I am userA')
        chatPage.sendIcon(deviceBrowser02, 4) //send a thumbs up icon
        chatPage.sendIcon(deviceBrowser01, 18) // send a friendly face icon
        chatPage.closeChat(deviceBrowser01) 
        chatPage.closeChat(deviceBrowser02)
        chatPage.leaveMeeting(deviceBrowser02)
        chatPage.leaveMeeting(deviceBrowser01)
        browser.pause(1000)
        deviceBrowser01.getUrl().should.be.equals('https://meet.jit.si/webdriverIO-chat-automation')
        deviceBrowser02.getUrl().should.be.equals('https://meet.jit.si/webdriverIO-chat-automation')
    })

})