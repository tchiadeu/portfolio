require "vcardigan"

vcard = VCardigan.create(:version => '4.0')
vcard.fullname 'Kévin TCHIADEU'
vcard.tel "+33650385900", :type => 'work'
vcard.email 'contact@kevintchiadeu.com', :type => 'work'
vcard[:item1].url 'https://kevintchiadeu.com'

file = File.open("vcard.vcf", "w")
file.puts vcard
# file.write(vcard.to_s)
file.close
