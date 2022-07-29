 (aws cloudformation get-template --stack-name $stack --template-stage Processed | ConvertFrom-Yaml)[0] `
 | Select-Object -Property TemplateBody -ExpandProperty TemplateBody `
 | Out-File copilot/cloudformation/$stack.template.yml