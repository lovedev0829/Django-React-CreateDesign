from django.shortcuts import render

# Create your views here.
from .forms import CalculationForm
import json

def calculate(request):
    result = None
    if request.method == 'POST':
        form = CalculationForm(request.POST)
        if form.is_valid():
            number1 = form.cleaned_data['number1']
            number2 = form.cleaned_data['number2']
            result = number1 + number2  # Perform your calculation here
    else:
        form = CalculationForm()
    return render(request, 'design/concrete_mix_design.html', {'form': form, 'result': result})
import json
from django.shortcuts import render

def chart_view(request):

    # Render the template with the chart data
    return render(request, 'design/chart.html')

# --------------------------------------------------------------------------------------
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

def get_updated_data(range_value):
    
    data = [
        {"code": "HNTEST0001", "name": "Cement", "reference": 20, "optimized": '282 lbs/cy', 'comments': 'First batch of tests' },
        {"code": "HNTEST0002", "name": "Blast Furnace Slag", "reference": 45, "optimized": 282, 'comments': 'First batch of tests'},
        {"code": "HNTEST0003", "name": "Fly Ash", "reference": 12, "optimized": 282, 'comments': 'First batch of tests'},
        {"code": "HNTEST0004", "name": "Water", "reference": 34, "optimized": 282, 'comments': 'First batch of tests'},
        {"code": "HNTEST0005", "name": "Superplasticizer", "reference": 90, "optimized": 282, 'comments': 'First batch of tests'},
        {"code": "HNTEST0006", "name": "Coarse Aggregate", "reference": 85, "optimized": 283, 'comments': 'First batch of tests'},
    ]
    
    '''
    updated_data = [
        {**item, "reference": range_value} for item in data
    ]
    
    return updated_data
    '''
    return data

@csrf_exempt
def update_data(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        range_value = body.get('range')
        updated_data = get_updated_data(range_value)
        return JsonResponse(updated_data, safe=False)
