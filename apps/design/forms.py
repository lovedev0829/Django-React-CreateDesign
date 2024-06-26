from django import forms

class CalculationForm(forms.Form):
    number1 = forms.FloatField(label='First Number')
    number2 = forms.FloatField(label='Second Number')
