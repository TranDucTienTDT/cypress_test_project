import UrlUtils from '../utils/urlUtils'

const url = "https://www.google.com/maps/place/Gardens+by+the+Bay/@1.2815683,103.8614245,17z/data=!3m1!4b1!4m5!3m4!1s0x31da1904937e1633:0x62099677b59fca76!8m2!3d1.2815683!4d103.8636132"

describe('My Login to Talent Partner Test', () => {

    const urlUtils = new UrlUtils()

    beforeEach(()=>{
        urlUtils.visit(url)
    })

    it('Click zoom in zoom out', () => {
        cy.get('#widget-zoom-in').click()
        cy.get('#widget-zoom-out').click()
        cy.get('.widget-scene-canvas').click('center').scrollIntoView
    })
})