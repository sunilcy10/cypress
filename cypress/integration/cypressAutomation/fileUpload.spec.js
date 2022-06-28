describe('verify the file uploading',()=>{
    it('verify the single file upload',()=>{
        let image = "st.jpg"
        cy.visit('https://webdriveruniversity.com/File-Upload/index.html')
        cy.get('#myFile').attachFile(image)
        cy.get('#submit-button').click()
        cy.url().should('contain',image)
    })
    it('verify the single image upload',()=>{
        let image = "st.jpg"
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        cy.get('#fileUpload').attachFile(image)
        cy.get('[class="filename"]').should('contain',image)

    })
    it('verify the upload image',()=>{
        let image ="st.jpg"
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/?submit-on-demand%27')
        cy.get('#file').attachFile(image)
        cy.get('[for="file"]').should('have.text','st.jpg')
    })
    it.only('verify the upload multiple images',()=>{
        let image ="st.jpg"
        cy.visit('https://www.igniteui.com/file-upload/overview')
        cy.get('#igUpload1_ibb_fp').attachFile([image,image,image])
        //cy.get('[for="file"]').should('have.text','st.jpg')
    })
})