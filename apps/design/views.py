from django.shortcuts import render

# Create your views here.
from django.db import connection, transaction
from .forms import CalculationForm
import json
import random
import psycopg2

# # Connect to the PostgreSQL database
# conn = psycopg2.connect(
#     host="localhost",
#     database="my_app",
#     user="postgres",
#     password="rootroot"
# )

# # Create a cursor object
# cursor = conn.cursor()

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
        {"code": "HNTEST0002", "name": "Blast Furnace Slag", "reference": 45, "optimized": '282', 'comments': 'First batch of tests'},
        {"code": "HNTEST0003", "name": "Fly Ash", "reference": 12, "optimized": 282, 'comments': 'First batch of tests'},
        {"code": "HNTEST0004", "name": "Water", "reference": 34, "optimized": 282, 'comments': 'First batch of tests'},
        {"code": "HNTEST0005", "name": "Superplasticizer", "reference": 90, "optimized": 282, 'comments': 'First batch of tests'},
        {"code": "HNTEST0006", "name": "Coarse Aggregate", "reference": 85, "optimized": 283, 'comments': 'First batch of tests'},
    ]
    
    '''
    updated_data = [
        {**item, "reference": range_value} for item in data
    ]
    
    return updated_data+
    '''
    return data

def get_mix_table_data(range_value):
    
    data = [
        {"code": "HNTEST0001", "name": "Cement", "reference": 20, "optimized": '282 lbs/cy', 'comments': 'First batch of tests' },
        {"code": "HNTEST0002", "name": "Blast Furnace Slag", "reference": 45, "optimized": '282', 'comments': 'First batch of tests'},
        {"code": "HNTEST0003", "name": "Fly Ash", "reference": 12, "optimized": 282, 'comments': 'First batch of tests'},
        {"code": "HNTEST0004", "name": "Water", "reference": 34, "optimized": 282, 'comments': 'First batch of tests'},
        {"code": "HNTEST0005", "name": "Superplasticizer", "reference": 90, "optimized": 282, 'comments': 'First batch of tests'},
        {"code": "HNTEST0006", "name": "Coarse Aggregate", "reference": 85, "optimized": 283, 'comments': 'First batch of tests'},
    ]
    
    
    return data

@csrf_exempt
def update_data(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        range_value = body.get('range')
        updated_data = get_updated_data(range_value)
        return JsonResponse(updated_data, safe=False)


"""""""""""""""""""""""""  Mix Editable Table Section Begin """""""""""""""""""""""""""""""
def random_hex_color():
    hex_chars = '0123456789ABCDEF'
    return '#' + ''.join(random.choice(hex_chars) for _ in range(6))

"Get Mix Editable Table Data"
@csrf_exempt
def get_user_data(request):
    if request.method == 'GET':
        options = []
        columns = [
            {
                "id": "firstName",
                "label": "First Name",
                "accessor": "firstName",
                "minWidth": 100,
                "dataType": "text",
                "options": []
            },
            {
                "id": "lastName",
                "label": "Last Name",
                "accessor": "lastName",
                "minWidth": 100,
                "dataType": "text",
                "options": []
            },
            {
                "id": "age",
                "label": "Age",
                "accessor": "age",
                "width": 80,
                "dataType": "number",
                "options": []
            },
            {
                "id": "email",
                "label": "E-Mail",
                "accessor": "email",
                "width": 300,
                "dataType": "text",
                "options": []
            },
            {
                "id": "music",
                "label": "Music Preference",
                "accessor": "music",
                "dataType": "select",
                "width": 200,
                "options": options
            },
            {
                "id": 999999,
                "width": 20,
                "label": "+",
                "disableResizing": False,
                "dataType": "null"
            }
        ]
        try:
            with connection.cursor() as cursor:
                cursor.execute('SELECT * FROM mix_user_table')
                data = cursor.fetchall()
                # Create a list of dictionaries, where each dictionary represents a row
                row_data = []
                for row in data:
                    row_dict = {
                        "firstName": row[0],
                        "lastName": row[1],
                        "age": row[2],
                        "email": row[3],
                        "music": row[4]
                    }

                    music_preference = row_dict['music']
                    if music_preference not in [option['label'] for option in columns[4]['options']]:
                        columns[4]['options'].append({
                            'label': music_preference,
                            'backgroundColor': random_hex_color()
                        })
                    row_dict['id'] = row[5]
                    row_data.append(row_dict)

            return JsonResponse([{"columns": columns, "data": row_data, "skipReset": False}], safe=False)
        except Exception as e:
            transaction.rollback()
            return JsonResponse({'success': False, 'error': str(e)}, safe=False)
        finally:
            transaction.set_autocommit(True)

"Update Mix Editable Table Data"
@csrf_exempt
def update_user_data(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        user_id = body.get('rowId')
        field = body.get('field')
        value = body.get('value')
        
        try:
            with connection.cursor() as cursor:
                sql = 'UPDATE public.mix_user_table SET "{0}" = \'{1}\' WHERE id = {2}'.format(field, value, user_id)
                print(sql)
                cursor.execute(sql)
            return JsonResponse({'success': True, 'newRange': 54}, safe=False)
        except Exception as e:
                transaction.rollback()
                return JsonResponse({'success': False, 'error': str(e)}, safe=False)
        finally:
            transaction.set_autocommit(True)
            
