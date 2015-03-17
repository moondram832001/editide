

When(/^I am on the homepage$/) do
     visit root_path
end

Then(/^I should see the sidebar selector/) do 
	page.should have_css('.sidebar-full-hyte') 
end

Then(/^I should hover over the sidebar$/) do
  	find('#settings-cog').hover
  	page.should have_content('Themes')
end

Then(/^I should click on the themes$/) do
  	find('#themes-bar').click
	page.should have_css("#menu-content")
	find('#sdark').click
	find('#slight').click
	find('#smonokai').click
end


