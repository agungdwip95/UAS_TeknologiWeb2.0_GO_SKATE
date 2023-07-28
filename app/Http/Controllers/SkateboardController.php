<?php

namespace App\Http\Controllers;

use App\Models\Skateboard;
use Illuminate\Http\Request;

class SkateboardController extends Controller
{
    public function index()
    {
        //get all skateboards
        $skateboards = Skateboard::latest()->get();

        // return view
        return inertia('Skateboards/Index', [
            'skateboards' => $skateboards
        ]);
    }

    public function produk()
    {
        //get all skateboards
        $skateboards = Skateboard::latest()->get();

        //return view
        return inertia('Skateboards/Produk', [
            'skateboards' => $skateboards
        ]);
    }

    public function about()
    {
        //get all skateboards
        $skateboards = Skateboard::latest()->get();

        //return view
        return inertia('Skateboards/About', [
            'skateboards' => $skateboards
        ]);
    }

    public function contact()
    {
        //get all skateboards
        $skateboards = Skateboard::latest()->get();

        //return view
        return inertia('Skateboards/Contact', [
            'skateboards' => $skateboards
        ]);
    }

    public function create()
    {
        return inertia('Skateboards/Create');   
    }

    public function store(Request $request)
    {
        //set validation
        $request->validate([
            'jenis_skateboard' => 'required',
            'merk' => 'required',
            'harga' => 'required',
        ]);

        //create skateboard
        Skateboard::create([
            'jenis_skateboard' => $request->jenis_skateboard,
            'merk' => $request->merk,
            'harga' => str_replace(',','',$request->harga),
            'keterangan' => $request->keterangan
        ]);

        //redirect
        return redirect()->route('skateboards.produk')->with('success', 'Data Saved Successfully!');
    }

    public function edit(Skateboard $skateboard)
    {
        return inertia('Skateboards/Edit', [
            'skateboard' => $skateboard,
        ]);
    }

    public function update(Request $request, Skateboard $skateboard)
    {
        //set validation
        $request->validate([
            'jenis_skateboard' => 'required',
            'merk' => 'required',
            'harga' => 'required',
        ]);

        //update skateboard
        $skateboard->update([
            'jenis_skateboard' => $request->jenis_skateboard,
            'merk' => $request->merk,
            'harga' => str_replace(',','',$request->harga),
            'keterangan' => $request->keterangan
        ]);

        //redirect
        return redirect()->route('skateboards.produk')->with('success', 'Data Successfully Updated!');
    }

    public function destroy(Skateboard $skateboard)
    {
        //delete skateboard
        $skateboard->delete();

        //redirect
        return redirect()->route('skateboards.produk')->with('success', 'Data Deleted Successfully!');
    }
}
